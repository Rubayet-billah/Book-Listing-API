// src/app/modules/profile/profile.route.ts

import express from 'express';
import auth from '../../middlewares/auth';
import { profileController } from './profile.controller';

const router = express.Router();

// Get User Profile
router.get('/', auth(), profileController.getUserProfile);

// Update User Profile
router.put('/', auth(), profileController.updateUserProfile);

export const profileRouter = router;
