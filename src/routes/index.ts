import { Router } from 'express';
import { UserRoutes } from '../modules/user/user/user.api';
import { AuthRoutes } from '../modules/user/auth/auth.api';
import { NavbarRoutes } from '../modules/settings/navbar/navbar.api';
import { BannerRoutes } from '../modules/settings/banner/banner.api';
import { HomeRoutes } from '../modules/settings/home/home.api';
import { FooterRoutes } from '../modules/settings/footer/footer.api';
import { JobCategoryRoutes } from '../modules/job-category/jobCategory.api';
import { HowItWorksRoutes } from '../modules/how-it-works/howItWorks.api';
import { SuccessStoryRoute } from '../modules/success-stories/success-stories.api';

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
    {
      path: '/navbar',
      route: NavbarRoutes,
    },
    {
      path: '/banner',
      route: BannerRoutes,
    },
    {
      path: '/home',
      route: HomeRoutes,
    },
    {
      path: '/footer',
      route: FooterRoutes,
    },
    
    {
      path: '/job-category',
      route: JobCategoryRoutes,
    },
    {
      path: '/how-to-works',
      route: HowItWorksRoutes,
    },
    {
      path: '/success-story',
      route: SuccessStoryRoute,
    },
]

moduleRoutes.forEach((routeObj) => router.use(routeObj.path, routeObj.route));

export default router;
