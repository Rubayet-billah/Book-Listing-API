import express from 'express';
import { userRouter } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/users',
    routes: userRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
