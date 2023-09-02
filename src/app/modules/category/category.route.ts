// src/app/modules/category/category.route.ts
import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { categoryController } from './category.controller';

const router = express.Router();

// Create Category
router.post(
  '/create-category',
  auth(ENUM_USER_ROLE.ADMIN),
  categoryController.createCategory
);

// Get All Categories
router.get('/', categoryController.getAllCategories);

// Get a Single Category
router.get('/:id', categoryController.getSingleCategory);

// Update a Category
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  categoryController.updateCategory
);

// Delete a Category
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  categoryController.deleteCategory
);

export const categoryRouter = router;
