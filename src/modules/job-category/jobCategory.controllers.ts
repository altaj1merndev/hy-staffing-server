import { Request, Response } from 'express';
import handleAsyncRequest from '../../utils/share/handleAsyncRequest';
import sendResponse from '../../utils/share/sendResponse';
import { JobCategoryServices } from './jobCategory.service';

// Create a new job category
const createJobCategory = handleAsyncRequest(async (req: Request, res: Response) => {
  const result = await JobCategoryServices.createJobCategory(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Job category created successfully!',
    data: result,
  });
});

// Get all job categories
const getJobCategories = handleAsyncRequest(async (req: Request, res: Response) => {
  const result = await JobCategoryServices.getJobCategories(req.query);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Job categories retrieved successfully!',
    data: result,
  });
});

// Get a job category by slug
const getJobCategoryBySlug = handleAsyncRequest(async (req: Request, res: Response) => {
  const result = await JobCategoryServices.getJobCategoryBySlug(req.params.slug);

  if (!result) {
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: 'Job category not found!',
      
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Job category retrieved successfully!',
    data: result,
  });
});

// Get a job category by agentId
const getJobCategoryByAgentId = handleAsyncRequest(async (req: Request, res: Response) => {
  const result = await JobCategoryServices.getJobCategoryByAgentId(req.params.agentId);

  if (!result) {
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: 'Job category not found!',
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Job category retrieved successfully!',
    data: result,
  });
});

// Update a job category
const updateJobCategory = handleAsyncRequest(async (req: Request, res: Response) => {
  const result = await JobCategoryServices.updateJobCategory(req.params.slug, req.body);

  if (!result) {
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: 'Job category not found or could not be updated!',
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Job category updated successfully!',
    data: result,
  });
});

// Delete a HowItWorks entry
const deleteJobCategory = handleAsyncRequest(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await JobCategoryServices.deleteJobCategory(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Job Category section deleted successfully!',
    data: result,
  });
});

export const JobCategoryController = {
  createJobCategory,
  getJobCategories,
  getJobCategoryBySlug,
  getJobCategoryByAgentId,
  updateJobCategory,
  deleteJobCategory
};
