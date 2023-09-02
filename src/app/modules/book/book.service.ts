// src/app/modules/book/book.service.ts

import { Book, PrismaClient } from '@prisma/client';
import ApiError from '../../../errors/ApiError';

const prisma = new PrismaClient();

const createBook = async (bookData: Book): Promise<Book> => {
  const result = await prisma.book.create({
    data: bookData,
  });
  return result;
};

const getAllBooks = async () => {
  return await prisma.book.findMany();
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
