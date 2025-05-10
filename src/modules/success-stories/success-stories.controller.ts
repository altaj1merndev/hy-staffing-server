import { Request, Response } from 'express';
import handleAsyncRequest from '../../utils/share/handleAsyncRequest';
import { SuccessStoryServices } from './success-stories.service';
import sendResponse from '../../utils/share/sendResponse';

// Create a new success story
const createSuccessStory = handleAsyncRequest(async (req: Request, res: Response) => {
  const result = await SuccessStoryServices.createSuccessStory(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Success story created successfully!',
    data: result,
  });
});

// Get all success stories
const getAllSuccessStories = handleAsyncRequest(async (req: Request, res: Response) => {
  const result = await SuccessStoryServices.getAllSuccessStories();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Success stories retrieved successfully!',
    data: result,
  });
});

// Get a single success story by ID
const getSuccessStoryById = handleAsyncRequest(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SuccessStoryServices.getSuccessStoryById(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Success story retrieved successfully!',
    data: result,
  });
});

// Update a success story by ID
const updateSuccessStory = handleAsyncRequest(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SuccessStoryServices.updateSuccessStory(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Success story updated successfully!',
    data: result,
  });
});

// Delete a success story by ID
const deleteSuccessStory = handleAsyncRequest(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SuccessStoryServices.deleteSuccessStory(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Success story deleted successfully!',
    data: result,
  });
});

export const SuccessStoryControllers = {
  createSuccessStory,
  getAllSuccessStories,
  getSuccessStoryById,
  updateSuccessStory,
  deleteSuccessStory,
};
