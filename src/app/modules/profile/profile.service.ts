// src/app/modules/profile/profile.service.ts

import { User } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const getUserProfile = async (userId: string): Promise<User> => {
  // Implement your logic to retrieve the user's profile here
  const userProfile = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!userProfile) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User profile not found');
  }

  return userProfile;
};

const updateUserProfile = async (
  userId: string,
  userProfileUpdates: any
): Promise<User> => {
  // Implement your logic to update the user's profile here
  const updatedUserProfile = await prisma.user.update({
    where: {
      id: userId,
    },
    data: userProfileUpdates,
  });

  return updatedUserProfile;
};

export const profileService = {
  getUserProfile,
  updateUserProfile,
};
