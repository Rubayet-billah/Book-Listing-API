# Bookstore API

This is a RESTful API for a bookstore. It provides endpoints to manage users, categories, books, and orders.

## Live Link

[https://book-catalouge-backend.vercel.app/](https://book-catalouge-backend.vercel.app/)

## Application Routes

### User

- `POST https://book-catalouge-backend.vercel.app/api/v1/auth/signup` - Create a new user.
- `GET https://book-catalouge-backend.vercel.app/api/v1/users` - Get a list of all users.
- `GET https://book-catalouge-backend.vercel.app/api/v1/users/5f9f5d67-73d9-4c3a-8d59-95596a07dd53` - Get a single user by ID.
- `PATCH https://book-catalouge-backend.vercel.app/api/v1/users/5f9f5d67-73d9-4c3a-8d59-95596a07dd53` - Update a user by ID.
- `DELETE https://book-catalouge-backend.vercel.app/api/v1/users/5f9f5d67-73d9-4c3a-8d59-95596a07dd53` - Delete a user by ID.
- `GET https://book-catalouge-backend.vercel.app/api/v1/profile` - Get the profile of the authenticated user.

### Category

- `POST https://book-catalouge-backend.vercel.app/api/v1/categories/create-category` - Create a new category.
- `GET https://book-catalouge-backend.vercel.app/api/v1/categories` - Get a list of all categories.
- `GET https://book-catalouge-backend.vercel.app/api/v1/categories/0b511a96-33d0-4ae8-b5e4-c0557b8776a3` - Get a single category by ID.
- `PATCH https://book-catalouge-backend.vercel.app/api/v1/categories/0b511a96-33d0-4ae8-b5e4-c0557b8776a3` - Update a category by ID.
- `DELETE https://book-catalouge-backend.vercel.app/api/v1/categories/0b511a96-33d0-4ae8-b5e4-c0557b8776a3` - Delete a category by ID.

### Books

- `POST https://book-catalouge-backend.vercel.app/api/v1/books/create-book` - Create a new book.
- `GET https://book-catalouge-backend.vercel.app/api/v1/books` - Get a list of all books.
- `GET https://book-catalouge-backend.vercel.app/api/v1/books/6fdd050b-eee9-4721-b245-62b367002e50` - Get a single book by ID.
- `PATCH https://book-catalouge-backend.vercel.app/api/v1/books/6fdd050b-eee9-4721-b245-62b367002e50` - Update a book by ID.
- `DELETE https://book-catalouge-backend.vercel.app/api/v1/books/6fdd050b-eee9-4721-b245-62b367002e50` - Delete a book by ID.

### Orders

- `POST https://book-catalouge-backend.vercel.app/api/v1/orders/create-order` - Create a new order.
- `GET https://book-catalouge-backend.vercel.app/api/v1/orders` - Get a list of all orders.
- `GET https://book-catalouge-backend.vercel.app/api/v1/orders/d902b393-a13c-4a6a-8dee-7b20635b5e54` - Get a single order by ID.
