import { NextFunction, Request, Response, Router } from 'express';
import auth from '../../../middlewares/auth';

import { USER_ROLE } from '../auth/auth.constants';
import { UserControllers } from './user.controllers';
import { upload } from '../../../utils/lib/sendImageToCloudinary';

const router = Router();

router.post(
  '/register',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    console.log('bor ouch');
    req.body = JSON.parse(req?.body?.data);
    next();
  },

  UserControllers.registerUser,
);


router.get('/me', auth(USER_ROLE.USER, USER_ROLE.ADMIN, ), UserControllers.getMe);

router.get('/', UserControllers.getUsers);

router.get('/:id', UserControllers.getUserDetails);

router.put(
  '/:id',
  auth(USER_ROLE.USER, USER_ROLE.ADMIN, ),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  UserControllers.updateUser,
);

router.delete(
  '/:id',
  auth(USER_ROLE.ADMIN),
  UserControllers.deleteUser,
);

export const UserRoutes = router;
