// src/app/modules/order/order.route.ts

import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { orderController } from './order.controller';

const router = express.Router();

// Create Order (Only Allowed For Customer)
router.post(
  '/create-order',
  auth(ENUM_USER_ROLE.CUSTOMER),
  orderController.createOrder
);

// Get All Orders (Only Allowed For Admins)
router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  orderController.getAllOrders
);

// Get All Orders for Specific Customer (Specific Customers Only)
router.get(
  '/customer-orders',
  auth(ENUM_USER_ROLE.CUSTOMER),
  orderController.getCustomerOrders
);

router.get(
  '/:orderId',
  auth(ENUM_USER_ROLE.CUSTOMER, ENUM_USER_ROLE.ADMIN), // Allow specific customers and admins
  orderController.getSingleOrderById
);

export const orderRouter = router;
