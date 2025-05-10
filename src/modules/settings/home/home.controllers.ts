// home/home.controller.ts
import { Request, Response } from 'express';
import HomeService from './home.service';
import handleAsyncRequest from '../../../utils/share/handleAsyncRequest';
import sendResponse from '../../../utils/share/sendResponse';

const createHomeSettings = handleAsyncRequest(async (req: Request, res: Response) => {
  const homeData = req.body;

  const newHomeSettings = await HomeService.createHomeSettings(homeData);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Home settings created successfully!',
    data: newHomeSettings,
  });
});

const getHomeSettings = handleAsyncRequest(async (_req: Request, res: Response) => {
  const settings = await HomeService.getHomeSettings();

  if (!settings) {
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: 'No home settings found, please create them.',
      data: null,
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Home settings retrieved successfully!',
    data: settings,
  });
});

const updateHomeSettings = handleAsyncRequest(async (req: Request, res: Response) => {
  const homeData = req.body;

  const updatedSettings = await HomeService.updateHomeSettings(homeData);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Home settings updated successfully!',
    data: updatedSettings,
  });
});

export const HomeController = {
  createHomeSettings,
  getHomeSettings,
  updateHomeSettings,
};
