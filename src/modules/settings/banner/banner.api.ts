// banner/banner.api.ts
import { Router } from 'express';
import auth from '../../../middlewares/auth';
import { USER_ROLE } from '../../user/auth/auth.constants';
import { BannerController } from './banner.controllers';

const router = Router();
// auth(USER_ROLE.ADMIN),
// auth(USER_ROLE.ADMIN),
// Define routes and map them to controller methods
router.post('/',  BannerController.createBanner); // Only admin can create a banner
router.get('/', BannerController.getBanner); // All users can get the banner
router.put('/',  BannerController.updateBanner); // Only admin can update the banner

export const BannerRoutes = router;
