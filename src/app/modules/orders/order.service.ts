// src/app/modules/order/order.service.ts

import { Order } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const createOrder = async (userId: string, orderData: any): Promise<Order> => {
  // Implement your logic to create an order here
  // You'll need to save the order in the database and associate it with the user

  // Example code (replace with actual implementation):
  const result = await prisma.order.create({
    data: {
      userId,
      ...orderData,
      status: 'pending', // Set the initial status here
    },
  });

  return result;
};

const getAllOrders = async (): Promise<Order[]> => {
  // Implement your logic to retrieve all orders here
  const orders = await prisma.order.findMany();
  return orders;
};

const getCustomerOrders = async (customerId: string): Promise<Order[]> => {
  // Implement your logic to retrieve orders for a specific customer here
  const existingUser = await prisma.user.findUnique({
    where: {
      id: customerId,
    },
  });

  if (!existingUser) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  const customerOrders = await prisma.order.findMany({
    where: {
      userId: customerId,
    },
  });

  return customerOrders;
};

const getSingleOrderById = async (
  orderId: string,
  userId: string
): Promise<Order | null> => {
  const existingUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
  });
  if (existingUser?.role !== 'admin' && order?.userId !== userId) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not authorized');
  }

  return order;
};

export const orderService = {
  createOrder,
  getAllOrders,
  getCustomerOrders,
  getSingleOrderById,
};
