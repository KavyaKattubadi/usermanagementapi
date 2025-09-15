const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const DB_FILE = process.env.DB_FILE || path.join(__dirname, 'users.db');

const db = new sqlite3.Database(DB_FILE, (err) => {
  if (err) {
    console.error('Could not connect to database', err);
    process.exit(1);
  } else {
    console.log('Connected to SQLite database at', DB_FILE);
  }
});

const createTableSql = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  company TEXT,
  street TEXT,
  city TEXT,
  zipcode TEXT,
  lat TEXT,
  lng TEXT
)`;

db.run(createTableSql, (err) => {
  if (err) {
    console.error('Error creating users table', err.message);
  } else {
    console.log('Users table ready');
  }
});

module.exports = db;