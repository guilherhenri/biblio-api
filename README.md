# Biblio API

A RESTful API for managing bibliographic information and library resources. This API provides endpoints for managing books, authors, categories, and user interactions with library collections.

## Features

- **Book Management**: Add, update, delete, and search for books
- **User Management**: Add and search for books
- **Loan Management**: Handle with borrow and give back books
- **RESTful Design**: Clean, intuitive API endpoints following REST principles

## Technology Stack

- **Backend Framework**: Node.js/Express
- **Database**: PostgreSQL/Sequelize

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm 10+
- Docker 28+

### Installation

1. Clone the repository:

```bash
git clone https://github.com/guilherhenri/biblio-api.git
cd biblio-api
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Set up the database:

```bash
docker-compose up -d
```

5. Start the development server:

```bash
pnpm run dev
```

The API will be available at `http://localhost:3333` (or your configured port).

## API Endpoints

### Books

- `GET /api/v1/books` - Get all books
- `GET /api/v1/books/:id` - Get book by ID
- `POST /api/v1/books` - Create new book
- `PUT /api/v1/books/:id` - Update book
- `DELETE /api/v1/books/:id` - Delete book

### Users

- `GET /api/v1/users` - Get all users
- `GET /api/v1/users/:id` - Get user by ID
- `POST /api/v1/users` - Register new user

### Loans

- `POST /api/v1/loans/register` - Register new user
- `POST /api/v1/loans/login` - User login
- `GET /api/v1/loans/profile` - Get user profile
- `PUT /api/v1/loans/profile` - Update user profile

## Request/Response Examples

### Get All Books

```bash
GET /api/v1/books
```

Response:

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "ISBN": "978-0-7432-7356-5",
      "year": 1925
    }
  ]
}
```

### Create New Book

```bash
POST /api/v1/books
Content-Type: application/json

{
  "title": "To Kill a Mockingbird",
  "author": "Harper Lee",
  "ISBN": "978-0-06-112008-4",
  "year": 1960,
}
```

## Error Handling

The API returns consistent error responses:

```json
{
  "status": false,
  "message": "Book not found"
}
```

## Environment Variables

Create a `.env` file with the following variables:

```env
NODE_ENV=development
NODE=development
SERVER_PORT=3333
DATABASE_HOST=your_database_host
DATABASE_PORT=your_database_port
DATABASE_NAME=your_database_name
DATABASE_USERNAME=your_database_username
DATABASE_PASSWORD=your_database_password
```

## Database Schema

### Books Table

- `id` (Primary Key)
- `title` (String, Required)
- `author` (String, Required)
- `ISBN` (String, Unique, Required)
- `year` (String, Required)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

### Users Table

- `id` (Primary Key)
- `name` (String, Required)
- `email` (String, Unique, Required)
- `phone` (String, Required)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

### Loans Table

- `id` (Primary Key)
- `userId` (Foreign Key)
- `bookId` (Foreign Key)
- `borrowDate` (Date, Required)
- `giveBackDate` (Date)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes:

   ```bash
    git commit
    <type>(<scope>): <short description>
    <BLANK LINE>
    <body>
    <BLANK LINE>
    <footer>
   ```
   
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## Contact

Guilherme Henri - [@guilherhenri](https://github.com/guilherhenri)

Project Link: [https://github.com/guilherhenri/biblio-api](https://github.com/guilherhenri/biblio-api)
