// src/app/modules/user/user.controller.ts

import { User } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { userService } from './user.service';

const signupUser = catchAsync(async (req: Request, res: Response) => {
  const userData = req.body;
  const result = await userService.signupUser(userData);

  sendResponse<User>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'user registered successfully',
    data: result,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Validate user credentials (e.g., check if the user exists and password is correct)
  const user = await userService.loginUser(email, password);

  if (!user) {
    return sendResponse(res, {
      success: false,
      statusCode: httpStatus.UNAUTHORIZED,
      message: 'Invalid email or password',
    });
  }

  // If login is successful, you can generate a JWT token for authentication
  const token = jwtHelpers.createToken(user);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User logged in successfully',
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

export const userController = {
  signupUser,
  getAllUsers,
  loginUser,
};
