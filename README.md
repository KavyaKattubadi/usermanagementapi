# User Management REST API

This project implements a simple User Management REST API using **Node.js**, **Express**, and **SQLite**.
It supports CRUD operations on users and is suitable as a backend for small frontend projects or assignments.

## Features
- `GET /api/users` - List all users
- `GET /api/users/:id` - Get single user by id
- `POST /api/users` - Create a new user (name and email required)
- `PUT /api/users/:id` - Update an existing user
- `DELETE /api/users/:id` - Delete a user

## Tech Stack
- Node.js + Express
- SQLite (file-based database)
- CORS enabled

## How to run locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server (development):
   ```bash
   npm start
   ```
   or with plain Node:
   ```bash
   npm run start:node
   ```
3. The server listens on `http://localhost:8080` by default.
   - You can change the port using environment variable `PORT`.

## Database
The SQLite database file `users.db` is created automatically on first run.
The `database.js` file ensures the `users` table exists.

## Notes
- `users.db` is included in `.gitignore` to avoid committing the database file.
- This API returns JSON responses suitable for frontend consumption.