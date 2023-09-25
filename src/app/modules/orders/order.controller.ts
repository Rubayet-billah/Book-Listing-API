// src/app/modules/order/order.controller.ts

import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { orderService } from './order.service';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.user as JwtPayload; // Extract user ID from the authenticated user
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
  const user = req.user;
  const orders = await orderService.getAllOrders(user);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Orders retrieved successfully',
    data: orders,
  });
});

const getCustomerOrders = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.user as JwtPayload; // Extract user ID from the authenticated user
  const customerOrders = await orderService.getCustomerOrders(userId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Customer orders retrieved successfully',
    data: customerOrders,
  });
});

const getSingleOrderById = catchAsync(async (req: Request, res: Response) => {
  const { orderId } = req.params;
  const { userId } = req.user as JwtPayload;
  const order = await orderService.getSingleOrderById(orderId, userId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Order fetched successfully',
    data: order,
  });
});

export const orderController = {
  createOrder,
  getAllOrders,
  getCustomerOrders,
  getSingleOrderById,
};
