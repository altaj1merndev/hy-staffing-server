// footer/footer.api.ts
import { Router } from 'express';
import { FooterController } from './footer.controller';
import auth from '../../../middlewares/auth';
import { USER_ROLE } from '../../user/auth/auth.constants';

const router = Router();
// auth(USER_ROLE.ADMIN),
// auth(USER_ROLE.ADMIN),
// Define the routes and map them to controller methods
router.post('/',  FooterController.createFooterSettings);
router.get('/', FooterController.getFooterSettings);
router.put('/',  FooterController.updateFooterSettings);

export const FooterRoutes = router;
