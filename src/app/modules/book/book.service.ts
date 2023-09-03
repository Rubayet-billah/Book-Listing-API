// src/app/modules/book/book.service.ts

import { Book, Prisma, PrismaClient } from '@prisma/client';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { bookSearchableFields } from './book.constants';
import { IBookFilters } from './book.interface';

const prisma = new PrismaClient();

const createBook = async (bookData: Book): Promise<Book> => {
  const result = await prisma.book.create({
    data: bookData,
  });
  return result;
};

const getAllBooks = async (
  filters: IBookFilters,
  options: IPaginationOptions
): Promise<IGenericResponse<Book[]>> => {
  const { search, ...filterData } = filters;
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);

  const andConditions = [];
  if (search) {
    andConditions.push({
      OR: bookSearchableFields.map(field => ({
        [field]: {
          contains: search,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => {
        if (key === 'minPrice') {
          return {
            price: {
              gt: +(filterData as any)[key],
            },
          };
        } else if (key === 'maxPrice') {
          return {
            price: {
              lt: +(filterData as any)[key],
            },
          };
        } else {
          return {
            [key]: {
              equals: (filterData as any)[key],
            },
          };
        }
      }),
    });
  }

  const whereConditons: Prisma.BookWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.book.findMany({
    where: whereConditons,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: 'desc',
          },
  });
  const total = await prisma.book.count();

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getSingleBook = async (id: string) => {
  return await prisma.book.findUnique({
    where: {
      id,
    },
  });
};

const getBooksByCategoryId = async (categoryId: string) => {
  return await prisma.book.findMany({
    where: {
      categoryId,
    },
  });
};

const updateBook = async (id: string, bookData: Partial<Book>) => {
  try {
    const updatedBook = await prisma.book.update({
      where: {
        id,
      },
      data: bookData,
    });
    return updatedBook;
  } catch (error) {
    throw new ApiError(500, 'Error while updating the book');
  }
};

const deleteBook = async (id: string) => {
  try {
    const deletedBook = await prisma.book.delete({
      where: {
        id,
      },
    });
    return deletedBook;
  } catch (error) {
    throw new ApiError(500, 'Error while deleting the book');
  }
};

export const bookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  getBooksByCategoryId,
  updateBook,
  deleteBook,
};
