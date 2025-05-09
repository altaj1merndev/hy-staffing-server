import { Router } from 'express';
import { UserRoutes } from '../modules/user/user/user.api';
import { AuthRoutes } from '../modules/user/auth/auth.api';

const router = Router();

const moduleRoutes = [
    {
      path: '/users',
      route: UserRoutes,
    },
    {
      path: '/auth',
      route: AuthRoutes,
    },
]

moduleRoutes.forEach((routeObj) => router.use(routeObj.path, routeObj.route));

export default router;
