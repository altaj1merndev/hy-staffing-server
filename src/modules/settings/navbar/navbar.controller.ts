// navbar/navbar.controller.ts
import { Request, Response } from 'express';
import NavbarService from './navbar.service';
import handleAsyncRequest from '../../../utils/share/handleAsyncRequest';
import sendResponse from '../../../utils/share/sendResponse';


const createNavbarSettings = handleAsyncRequest(async (req: Request, res: Response) => {
  const settingsData = req.body;

  const newSettings = await NavbarService.createNavbarSettings(settingsData);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Navbar settings created successfully!',
    data: newSettings,
  });
});

const getNavbarSettings = handleAsyncRequest(async (_req: Request, res: Response) => {
  const settings = await NavbarService.getNavbarSettings();

  if (!settings) {
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: 'No navbar settings found, please create them.',
      data: null,
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Navbar settings retrieved successfully!',
    data: settings,
  });
});

const updateNavbarSettings = handleAsyncRequest(async (req: Request, res: Response) => {
  const settingsData = req.body;
  const updatedSettings = await NavbarService.updateNavbarSettings(settingsData);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Navbar settings updated successfully!',
    data: updatedSettings,
  });
});

export const NavbarController = {
  createNavbarSettings,
  getNavbarSettings,
  updateNavbarSettings,
};
