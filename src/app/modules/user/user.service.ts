// src/app/modules/user/user.service.ts

import { User } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const signupUser = async (payload: User): Promise<User> => {
  const result = await prisma.user.create({
    data: payload,
  });
  return result;
};

const loginUser = async (
  email: string,
  password: string
): Promise<User | null> => {
  const isExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  if (isExist?.password !== password) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Wrong password');
  }

  const user = await prisma.user.findFirst({
    where: {
      email,
      password,
    },
  });

  return user;
};

const getAllUsers = async (): Promise<User[]> => {
  const result = await prisma.user.findMany();
  return result;
};

const getSingleUser = async (id: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return user;
};

export const userService = {
  signupUser,
  getAllUsers,
  loginUser,
  getSingleUser,
};
