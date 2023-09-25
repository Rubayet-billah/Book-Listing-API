// src/app/modules/user/user.route.ts

import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { userController } from './user.controller';

const router = express.Router();

router.post('/auth/signup', userController.signupUser);
router.post('/auth/signin', userController.loginUser);
router.get('/users', auth(ENUM_USER_ROLE.ADMIN), userController.getAllUsers);
router.get(
  '/users/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  userController.getSingleUser
);
router.patch(
  '/users/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  userController.updateUser
);
router.delete(
  '/users/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  userController.deleteUser
);

export const userRouter = router;
