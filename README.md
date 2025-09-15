User Management REST API – Backend Intern Assignment
📌 Overview

A RESTful API for managing users with CRUD operations using Node.js, Express, and SQLite.

🚀 Features

Fetch all users (GET /api/users)

Fetch single user (GET /api/users/:id)

Create new user (POST /api/users)

Update user (PUT /api/users/:id)

Delete user (DELETE /api/users/:id)

Server-side validation for required fields

Proper error handling

🛠️ Tech Stack

Node.js

Express.js

SQLite

CORS

📂 Project Structure
user-management-api/
├── routes/
│   └── users.js        # API routes
├── database.js         # SQLite DB connection & table setup
├── server.js           # Main server file
├── package.json
└── README.md

⚡ Setup & Run Locally

Clone the repo:

git clone <repo-url>
cd user-management-api


Install dependencies:

npm install


Start the server:

npm start



🚀 Deployment

Deploy on Render, Heroku, or any Node.js hosting platform.

Ensure users.db is included or initialized on the server.

📝 Notes

Follows RESTful conventions

Returns proper HTTP status codes (200, 201, 400, 404)

SQLite is lightweight and file-based
