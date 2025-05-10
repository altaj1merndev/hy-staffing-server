import { Router } from 'express';
import { HowItWorksController } from './howItWorks.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/auth/auth.constants';
// Assuming you're using some form of authentication

const router = Router();

// Public route to get all "How it works" sections
router.get('/', HowItWorksController.getAllHowItWorks);

// Protected routes for admin to create, update, or delete
router.post('/',auth(USER_ROLE.ADMIN),  HowItWorksController.createHowItWorks); // Admin can create a new "How it works"
router.put('/:id',auth(USER_ROLE.ADMIN),  HowItWorksController.updateHowItWorks); // Admin can update an existing "How it works"
router.delete('/:id', auth(USER_ROLE.ADMIN), HowItWorksController.deleteHowItWorks); // Admin can delete a "How it works"

// You can also add additional routes for specific use cases, if needed.

export const HowItWorksRoutes = router;
