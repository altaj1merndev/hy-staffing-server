import { Request, Response } from 'express';

import { HowItWorksServices } from './howItWorks.services';
import handleAsyncRequest from '../../utils/share/handleAsyncRequest';
import sendResponse from '../../utils/share/sendResponse';

// Create a HowItWorks entry
const createHowItWorks = handleAsyncRequest(async (req: Request, res: Response) => {
  const result = await HowItWorksServices.createHowItWorks(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'How it works section created successfully!',
    data: result,
  });
});

// Get all HowItWorks entries
const getAllHowItWorks = handleAsyncRequest(async (req: Request, res: Response) => {
  const result = await HowItWorksServices.getAllHowItWorks(req.query);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'How it works sections retrieved successfully!',
    data: result.result,
    meta: result.meta,
  });
});

// Update a HowItWorks entry
const updateHowItWorks = handleAsyncRequest(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await HowItWorksServices.updateHowItWorks(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'How it works section updated successfully!',
    data: result,
  });
});

// Delete a HowItWorks entry
const deleteHowItWorks = handleAsyncRequest(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await HowItWorksServices.deleteHowItWorks(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'How it works section deleted successfully!',
    data: result,
  });
});

export const HowItWorksController = {
  createHowItWorks,
  getAllHowItWorks,
  updateHowItWorks,
  deleteHowItWorks,
};
