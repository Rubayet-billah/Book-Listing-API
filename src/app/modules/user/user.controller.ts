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
  const { email, role } = result;

  // If registration is successful, you can generate a JWT token for authentication
  jwtHelpers.createToken(
    { email, role },
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
    { email: user?.email, role: user.role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User signin successfully!',
    data: { user, token },
  });
});

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.getAllUsers();

  sendResponse<User[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'user retrieved successfully',
    data: result,
  });
});

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  // Retrieve the user by id
  const user = await userService.getSingleUser(id);

  if (!user) {
    return sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: 'User not found',
    });
  }

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User fetched successfully',
    data: user,
  });
});

export const userController = {
  signupUser,
  loginUser,
  getAllUsers,
  getSingleUser,
};
