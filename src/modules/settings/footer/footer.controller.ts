// footer/footer.controller.ts
import { Request, Response } from 'express';
import FooterService from './footer.service';
import handleAsyncRequest from '../../../utils/share/handleAsyncRequest';
import sendResponse from '../../../utils/share/sendResponse';

const createFooterSettings = handleAsyncRequest(async (req: Request, res: Response) => {
  const settingsData = req.body;
  const newSettings = await FooterService.createFooterSettings(settingsData);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Footer settings created successfully!',
    data: newSettings,
  });
});

const getFooterSettings = handleAsyncRequest(async (_req: Request, res: Response) => {
  const settings = await FooterService.getFooterSettings();

  if (!settings) {
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: 'No footer settings found, please create them.',
      data: null,
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Footer settings retrieved successfully!',
    data: settings,
  });
});

const updateFooterSettings = handleAsyncRequest(async (req: Request, res: Response) => {
  const settingsData = req.body;
  const updatedSettings = await FooterService.updateFooterSettings(settingsData);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Footer settings updated successfully!',
    data: updatedSettings,
  });
});

export const FooterController = {
  createFooterSettings,
  getFooterSettings,
  updateFooterSettings,
};
