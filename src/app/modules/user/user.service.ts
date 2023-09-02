// src/app/modules/user/user.service.ts

import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const signupUser = async (payload: User): Promise<User> => {
  const result = await prisma.user.create({
    data: payload,
  });
  return result;
};

const getAllUsers = async (): Promise<User[]> => {
  const result = await prisma.user.findMany();
  return result;
};

export const userService = {
  signupUser,
  getAllUsers,
};
