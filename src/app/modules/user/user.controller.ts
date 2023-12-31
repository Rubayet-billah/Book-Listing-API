// src/app/modules/user/user.controller.ts

import { User } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { userService } from './user.service';

const signupUser = catchAsync(async (req: Request, res: Response) => {
  const userData = req.body;
  const result = await userService.signupUser(userData);
  const { id, email, role } = result;

  // If registration is successful, you can generate a JWT token for authentication
  jwtHelpers.createToken(
    { userId: id, email, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  sendResponse<User>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'user registered successfully',
    data: result,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await userService.loginUser(email, password);

  if (!user) {
    return sendResponse(res, {
      success: false,
      statusCode: httpStatus.UNAUTHORIZED,
      message: 'Invalid email or password',
    });
  }

  // If login is successful, you can generate a JWT token for authentication
  const token = jwtHelpers.createToken(
    { userId: user?.id, email: user?.email, role: user.role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User signin successfully!',
    token,
  });
});

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.getAllUsers();

  sendResponse<User[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'users retrieved successfully',
    data: result,
  });
});

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  // Retrieve the user by id
  const user = await userService.getSingleUser(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User retrieved successfully',
    data: user,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const userDataToUpdate = req.body;

  // Update the user by id
  const updatedUser = await userService.updateUser(id, userDataToUpdate);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User updated successfully',
    data: updatedUser,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  // Delete the user by id
  const deletedUser = await userService.deleteUser(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User deleted successfully',
    data: deletedUser,
  });
});

export const userController = {
  signupUser,
  loginUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
