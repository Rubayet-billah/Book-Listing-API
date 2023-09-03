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
router.get('/', auth(ENUM_USER_ROLE.ADMIN), orderController.getAllOrders);

// Get All Orders for Specific Customer (Specific Customers Only)
router.get(
  '/customer-orders',
  auth(ENUM_USER_ROLE.CUSTOMER),
  orderController.getCustomerOrders
);

export const orderRouter = router;
