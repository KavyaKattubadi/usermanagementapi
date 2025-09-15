# User Management REST API – Backend Assignment

## Overview
A RESTful API to perform CRUD operations on users stored in SQLite database.

## Features
- GET /api/users – fetch all users
- GET /api/users/:id – fetch single user
- POST /api/users – create new user
- PUT /api/users/:id – update user
- DELETE /api/users/:id – delete user
- Server-side validation and error handling

## Tech Stack
- Node.js
- Express.js
- SQLite
- CORS

## Project Structure
backend/
├── database.js # SQLite connection & table creation
├── server.js # Express server setup
├── routes/
│ └── users.js # API routes
├── package.json
└── .gitignore
