const express = require('express');
const router = express.Router();
const db = require('../database.js');

// GET all users
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM users ORDER BY id DESC';
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ data: rows });
  });
});

// GET user by id
router.get('/:id', (req, res) => {
  const sql = 'SELECT * FROM users WHERE id = ?';
  const params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) return res.status(404).json({ error: 'User not found' });
    res.json({ data: row });
  });
});

// POST create new user
router.post('/', (req, res) => {
  const { name, email, phone, company, street, city, zipcode, lat, lng } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  const sql = `INSERT INTO users (name, email, phone, company, street, city, zipcode, lat, lng)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const params = [name, email, phone, company, street, city, zipcode, lat, lng];
  db.run(sql, params, function(err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    const id = this.lastID;
    db.get('SELECT * FROM users WHERE id = ?', [id], (err2, row) => {
      if (err2) return res.status(500).json({ error: err2.message });
      res.status(201).json({ data: row });
    });
  });
});

// PUT update user
router.put('/:id', (req, res) => {
  const { name, email, phone, company, street, city, zipcode, lat, lng } = req.body;
  const sql = `UPDATE users SET name = ?, email = ?, phone = ?, company = ?, street = ?, city = ?, zipcode = ?, lat = ?, lng = ? WHERE id = ?`;
  const params = [name, email, phone, company, street, city, zipcode, lat, lng, req.params.id];
  db.run(sql, params, function(err) {
    if (err) return res.status(400).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'User not found' });
    db.get('SELECT * FROM users WHERE id = ?', [req.params.id], (err2, row) => {
      if (err2) return res.status(500).json({ error: err2.message });
      res.json({ data: row });
    });
  });
});

// DELETE user
router.delete('/:id', (req, res) => {
  const sql = 'DELETE FROM users WHERE id = ?';
  db.run(sql, [req.params.id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  });
});

module.exports = router;