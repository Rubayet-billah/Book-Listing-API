// src/app/modules/user/user.route.ts

import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { userController } from './user.controller';

const router = express.Router();

router.post('/signup', userController.signupUser);
router.post('/login', userController.loginUser);
router.get('/', auth(ENUM_USER_ROLE.ADMIN), userController.getAllUsers);

export const userRouter = router;
