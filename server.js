const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./database.js'); // initialize DB
const userRoutes = require('./routes/users.js');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Root welcome
app.get('/', (req, res) => {
  res.json({ message: 'User Management API - running' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});