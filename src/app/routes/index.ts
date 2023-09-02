import express from 'express';
import { categoryRouter } from '../modules/category/category.route';
import { userRouter } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/users',
    routes: userRouter,
  },
  {
    path: '/categories',
    routes: categoryRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
