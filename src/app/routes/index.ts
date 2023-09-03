import express from 'express';
import { bookRouter } from '../modules/book/book.route';
import { categoryRouter } from '../modules/category/category.route';
import { orderRouter } from '../modules/orders/order.route';
import { profileRouter } from '../modules/profile/profile.route';
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
  {
    path: '/books',
    routes: bookRouter,
  },
  {
    path: '/orders',
    routes: orderRouter,
  },
  {
    path: '/profile',
    routes: profileRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
