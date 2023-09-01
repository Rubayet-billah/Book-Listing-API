// src/app/modules/user/user.controller.ts

import { User } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
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

export const userController = {
  signupUser,
};
