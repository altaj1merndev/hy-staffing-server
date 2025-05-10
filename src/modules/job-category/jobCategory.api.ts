// jobCategory/jobCategory.api.ts
import { Router } from 'express';

import { JobCategoryController } from './jobCategory.controllers';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/auth/auth.constants';

const router = Router();
// auth(USER_ROLE.ADMIN),
// Only admin, agent can create a job category
router.post('/',auth(USER_ROLE.ADMIN, USER_ROLE.AGENT),  JobCategoryController.createJobCategory);

// All users can get all job categories
router.get('/', JobCategoryController.getJobCategories);

// Only admin can update a job category
router.put('/:slug',auth(USER_ROLE.ADMIN, USER_ROLE.AGENT),  JobCategoryController.updateJobCategory);

// Get job category by slug
router.get('/:slug', JobCategoryController.getJobCategoryBySlug);

// Get job category by agentId
router.get('/agent/:agentId',auth(USER_ROLE.ADMIN, USER_ROLE.AGENT), JobCategoryController.getJobCategoryByAgentId);

router.delete('/:id', auth(USER_ROLE.ADMIN, USER_ROLE.AGENT), JobCategoryController.deleteJobCategory);

export const JobCategoryRoutes = router;
 