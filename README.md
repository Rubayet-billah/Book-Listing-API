# Bookstore API

This is a RESTful API for a bookstore. It provides endpoints to manage users, categories, books, and orders.

## Live Link

[https://example.com](https://example.com)

## Application Routes

### User

- `POST /api/v1/auth/signup` - Create a new user.
- `GET /api/v1/users` - Get a list of all users.
- `GET /api/v1/users/01301544-8587-43cf-b6dd-6d607c23e53b` - Get a single user by ID.
- `PATCH /api/v1/users/01301544-8587-43cf-b6dd-6d607c23e53b` - Update a user by ID.
- `DELETE /api/v1/users/01301544-8587-43cf-b6dd-6d607c23e53b` - Delete a user by ID.
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
- `GET /api/v1/books/35381f19-cdab-4dc9-8804-ca07bc0bef2c` - Get a single book by ID.
- `GET /api/v1/books/88e27309-53fc-4607-a9a1-d43dd7947e6a` - Get a single book by ID.
- `GET /api/v1/books/55e84b08-d380-4ff1-9702-dbce643e5b02` - Get a single book by ID.
- `GET /api/v1/books/a447e29c-ef33-4dfd-abf1-03ba45476402` - Get a single book by ID.
- `GET /api/v1/books/a06fadd9-98a4-4195-82c8-1649eabf9429` - Get a single book by ID.
- `GET /api/v1/books/7301f565-f2da-4117-8b11-ab292120ed8b` - Get a single book by ID.
- `GET /api/v1/books/ab0164f3-9505-460f-8309-af8105fd8a7c` - Get a single book by ID.
- `GET /api/v1/books/b9918882-c1e3-4690-93e5-c9393c6ffa75` - Get a single book by ID.
- `GET /api/v1/books/ab0164f3-9505-460f-8309-af8105fd8a7c` - Get a single book by ID.
- `PATCH /api/v1/books/09c5702b-9377-4213-8755-230394712cb0` - Update a book by ID.
- `DELETE /api/v1/books/09c5702b-9377-4213-8755-230394712cb0` - Delete a book by ID.

### Orders

- `POST /api/v1/orders/create-order` - Create a new order.
- `GET /api/v1/orders` - Get a list of all orders.
- `GET /api/v1/orders/f63f6f72-9030-4203-b95a-be400f55e157` - Get a single order by ID.
- `GET /api/v1/orders/84a6498c-ef42-410b-b156-0f05b21a5270` - Get a single order by ID.
- `GET /api/v1/orders/58a35bfc-0de8-45f4-99a6-9af19cb9204d` - Get a single order by ID.
