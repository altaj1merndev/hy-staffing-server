// navbar/navbar.api.ts
import { Router } from 'express';
import { NavbarController } from './navbar.controller'; // Import the NavbarController
import auth from '../../../middlewares/auth';
import { USER_ROLE } from '../../user/auth/auth.constants';

const router = Router();

// Define the routes and map them to controller methods
router.post('/',auth(USER_ROLE.ADMIN), NavbarController.createNavbarSettings);
router.get('/',  NavbarController.getNavbarSettings);
router.put('/', auth(USER_ROLE.ADMIN), NavbarController.updateNavbarSettings);

export const NavbarRoutes = router;