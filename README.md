# Bookstore API

This is a RESTful API for a bookstore. It provides endpoints to manage users, categories, books, and orders.

## Live Link

[https://example.com](https://example.com)

## Application Routes

### User

- `POST /api/v1/auth/signup` - Create a new user.
- `GET /api/v1/users` - Get a list of all users.
- `GET /api/v1/users/86786300-2c4e-46c7-b418-c7fc4d9598fe` - Get a single user by ID.
- `PATCH /api/v1/users/86786300-2c4e-46c7-b418-c7fc4d9598fe` - Update a user by ID.
- `DELETE /api/v1/users/86786300-2c4e-46c7-b418-c7fc4d9598fe` - Delete a user by ID.
- `GET /api/v1/profile` - Get the profile of the authenticated user.

### Category

- `POST /api/v1/categories/create-category` - Create a new category.
- `GET /api/v1/categories` - Get a list of all categories.
- `GET /api/v1/categories/025b8f92-3773-4f67-973f-ea2c14e65587` - Get a single category by ID.
- `PATCH /api/v1/categories/025b8f92-3773-4f67-973f-ea2c14e65587` - Update a category by ID.
- `DELETE /api/v1/categories/025b8f92-3773-4f67-973f-ea2c14e65587` - Delete a category by ID.

### Books

- `POST /api/v1/books/create-book` - Create a new book.
- `GET /api/v1/books` - Get a list of all books.
- `GET /api/v1/books/09c5702b-9377-4213-8755-230394712cb0` - Get a single book by ID.
- `PATCH /api/v1/books/09c5702b-9377-4213-8755-230394712cb0` - Update a book by ID.
- `DELETE /api/v1/books/09c5702b-9377-4213-8755-230394712cb0` - Delete a book by ID.

### Orders

- `POST /api/v1/orders/create-order` - Create a new order.
- `GET /api/v1/orders` - Get a list of all orders.
- `GET /api/v1/orders/f63f6f72-9030-4203-b95a-be400f55e157` - Get a single order by ID.
