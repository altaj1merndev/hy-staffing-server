// banner/banner.controller.ts
import { Request, Response } from 'express';
import BannerService from './banner.service';
import handleAsyncRequest from '../../../utils/share/handleAsyncRequest';
import sendResponse from '../../../utils/share/sendResponse';

const createBanner = handleAsyncRequest(async (req: Request, res: Response) => {
  const bannerData = req.body;
  const newBanner = await BannerService.createBanner(bannerData);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Banner created successfully!',
    data: newBanner,
  });
});

const getBanner = handleAsyncRequest(async (_req: Request, res: Response) => {
  const banner = await BannerService.getBanner();

  if (!banner) {
    return sendResponse(res, {
      success: false,
      statusCode: 404,
      message: 'No banner data found, please create it.',
      data: null,
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Banner data retrieved successfully!',
    data: banner,
  });
});

const updateBanner = handleAsyncRequest(async (req: Request, res: Response) => {
  const bannerData = req.body;

  const updatedBanner = await BannerService.updateBanner(bannerData);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Banner updated successfully!',
    data: updatedBanner,
  });
});

export const BannerController = {
  createBanner,
  getBanner,
  updateBanner,
};
