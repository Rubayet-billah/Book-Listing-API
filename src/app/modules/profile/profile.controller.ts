// src/app/modules/profile/profile.controller.ts

import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { profileService } from './profile.service';

const getUserProfile = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.user; // Extract user ID from the authenticated user
  const userProfile = await profileService.getUserProfile(userId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User profile retrieved successfully',
    data: userProfile,
  });
});

const updateUserProfile = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.user; // Extract user ID from the authenticated user
  const userProfileUpdates = req.body;
  const updatedUserProfile = await profileService.updateUserProfile(
    userId,
    userProfileUpdates
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User profile updated successfully',
    data: updatedUserProfile,
  });
});

export const profileController = {
  getUserProfile,
  updateUserProfile,
};
