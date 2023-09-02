// src/app/modules/user/user.route.ts

import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

router.post('/signup', userController.signupUser);
router.post('/login', userController.loginUser);
router.get('/', userController.getAllUsers);

export const userRouter = router;
