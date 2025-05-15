import { JobCategory } from './jobCategory.model';

import { TJobCategory } from './jobCategory.interface';
import AppError from '../../errors/AppError';
import QueryBuilder from '../../utils/queryBuilder';
import { stringToSlug } from '../../utils/lib/stringToSlug';
import { User } from '../user/user/user.model';
import NotificationModel from '../notification/notification.model';

// Create a new job category
const createJobCategory = async (payload: TJobCategory) => {
  // Generate a slug from the title
  const slug = stringToSlug(payload.title);

  // Check for existing category with same slug
  const existingCategory = await JobCategory.findOne({ slug });
  if (existingCategory) {
    throw new AppError(400, 'Job category with this slug already exists!');
  }

  // Verify that the agent exists
  const isUserExist = await User.findById(payload.agentId);
  if (!isUserExist) {
    throw new AppError(404, 'Agent (User) not found!');
  }
  await NotificationModel.create({
    userId: payload.agentId,
    type: 'product',
    title: 'New Product Added',
    message: `User ${payload.agentId} added a new product.`,
  });
  // Create new job category
  const result = await JobCategory.create({
    ...payload,
    slug,
  });

  return result;
};


// Get all job categories
const getJobCategories = async (query: Record<string, unknown>) => {
    const jobCategoryQuery = new QueryBuilder(
        JobCategory.find().populate('agentId'),
        query
      )
      .search(['title', 'slug'])   // Search by title or slug
      .filter()                    // Apply any filters
      .sort()                      // Apply sorting
      .paginate()                  // Pagination
      .fieldsLimit();              // Limit the fields returned
  
    const result = await jobCategoryQuery.modelQuery;
    const meta = await jobCategoryQuery.countTotal();
  
    return {
      meta,
      data:result,
    };
  };
  

// Get a job category by slug
const getJobCategoryBySlug = async (slug: string) => {
  const result = await JobCategory.findOne({ slug });
  
  if (!result) {
    throw new AppError(404, 'Job category not found!');
  }

  return result;
};

// Get a job category by agentId
const getJobCategoryByAgentId = async (agentId: string) => {
  const result = await JobCategory.findOne({ agentId });

  if (!result) {
    throw new AppError(404, 'Job category not found!');
  }

  return result;
};


const updateJobCategory = async (slug: string, payload: Partial<TJobCategory>) => {
    // If the title is updated, regenerate the slug
    if (payload.title) {
      const newSlug = stringToSlug(payload.title);
  
      // Check for slug conflict
      const existingCategory = await JobCategory.findOne({ slug: newSlug });
      if (existingCategory && existingCategory.slug !== slug) {
        throw new AppError(400, 'Another job category with this title already exists!');
      }
  
      payload.slug = newSlug;
    }
  
    const result = await JobCategory.findOneAndUpdate({ slug }, payload, {
      new: true,
      runValidators: true,
    });
  
    if (!result) {
      throw new AppError(404, 'Job category not found!');
    }
  
    return result;
  };


  // Delete a "How it works" entry
const deleteJobCategory = async (id: string) => {
  const result = await JobCategory.findByIdAndDelete(id);

  if (!result) {
    throw new AppError(404, 'Job Category section not found!');
  }

  return result;
};

export const JobCategoryServices = {
  createJobCategory,
  getJobCategories,
  getJobCategoryBySlug,
  getJobCategoryByAgentId,
  updateJobCategory,
  deleteJobCategory
};
