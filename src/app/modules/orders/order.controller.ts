// src/app/modules/order/order.controller.ts

import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { orderService } from './order.service';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.user; // Extract user ID from the authenticated user
  const orderData = req.body;
  const result = await orderService.createOrder(userId, orderData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Order created successfully',
    data: result,
  });
});

const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  const orders = await orderService.getAllOrders();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Orders retrieved successfully',
    data: orders,
  });
});

const getCustomerOrders = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.user; // Extract user ID from the authenticated user
  const customerOrders = await orderService.getCustomerOrders(userId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Customer orders retrieved successfully',
    data: customerOrders,
  });
});

export const orderController = {
  createOrder,
  getAllOrders,
  getCustomerOrders,
};
