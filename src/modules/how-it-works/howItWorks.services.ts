import { HowItWorks } from './howItWorks.model';
import { THowItWorks } from './howItWorks.interface';
import QueryBuilder from '../../utils/queryBuilder';
import AppError from '../../errors/AppError';


// Create a new "How it works" entry
const createHowItWorks = async (payload: THowItWorks) => {
  const newHowItWorks = new HowItWorks(payload);
  const result = await newHowItWorks.save();

  return result;
};

// Get all "How it works" entries with query builders for searching, filtering, and pagination
const getAllHowItWorks = async (query: Record<string, unknown>) => {
  const howItWorksQuery = new QueryBuilder<typeof HowItWorks>(HowItWorks.find(), query)
    .search(['title', 'subTitle'])
    .filter()
    .sort()
    .paginate()
    .fieldsLimit();

  const result = await howItWorksQuery.modelQuery;
  const meta = await howItWorksQuery.countTotal();

  return {
    meta,
    result,
  };
};

// Update an existing "How it works" entry
const updateHowItWorks = async (id: string, payload: Partial<THowItWorks>) => {
  const result = await HowItWorks.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!result) {
    throw new AppError(404, 'How it works section not found!');
  }

  return result;
};

// Delete a "How it works" entry
const deleteHowItWorks = async (id: string) => {
  const result = await HowItWorks.findByIdAndDelete(id);

  if (!result) {
    throw new AppError(404, 'How it works section not found!');
  }

  return result;
};

export const HowItWorksServices = {
  createHowItWorks,
  getAllHowItWorks,
  updateHowItWorks,
  deleteHowItWorks,
};
