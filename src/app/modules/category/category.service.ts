// src/app/modules/category/category.service.ts
import { Category } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const createCategory = async (payload: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data: payload,
  });
  return result;
};

const getAllCategories = async (): Promise<Category[]> => {
  const categories = await prisma.category.findMany();
  return categories;
};

const getSingleCategory = async (
  categoryId: string
): Promise<Category | null> => {
  const category = await prisma.category.findUnique({
    where: {
      id: categoryId,
    },
    include: {
      books: true,
    },
  });

  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No data found');
  }

  return category;
};

const updateCategory = async (
  categoryId: string,
  updatedData: Category
): Promise<Category | null> => {
  const category = await prisma.category.findUnique({
    where: {
      id: categoryId,
    },
  });
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No data found');
  }

  const updatedCategory = await prisma.category.update({
    where: {
      id: categoryId,
    },
    data: updatedData,
  });
  return updatedCategory;
};

const deleteCategory = async (categoryId: string): Promise<Category | null> => {
  const category = await prisma.category.findUnique({
    where: {
      id: categoryId,
    },
  });
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No data found');
  }

  const deletedCategory = await prisma.category.delete({
    where: {
      id: categoryId,
    },
  });
  return deletedCategory;
};

export const categoryService = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
