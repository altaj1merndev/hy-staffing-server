// home/home.api.ts
import { Router } from 'express';
import auth from '../../../middlewares/auth';
import { USER_ROLE } from '../../user/auth/auth.constants';
import { HomeController } from './home.controllers';

const router = Router();
// auth(USER_ROLE.ADMIN),
// auth(USER_ROLE.ADMIN),
// Define the routes and map them to controller methods
router.post('/', HomeController.createHomeSettings);
router.get('/', HomeController.getHomeSettings);
router.put('/', HomeController.updateHomeSettings);

export const HomeRoutes = router;
