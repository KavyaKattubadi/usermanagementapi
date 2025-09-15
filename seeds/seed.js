/*
  Simple seed script to add two users.
  Run with: node seeds/seed.js
*/
const db = require('../database.js');

const users = [
  { name: 'Rahul Sharma', email: 'rahul@example.com', phone: '9000000001', company: 'TechSoft', street: 'MG Road', city: 'Bengaluru', zipcode: '560001', lat: '12.97', lng: '77.59' },
  { name: 'Amit Kumar', email: 'amit@example.com', phone: '9000000002', company: 'WebWorks', street: 'Park Street', city: 'Kolkata', zipcode: '700016', lat: '22.57', lng: '88.36' }
];

users.forEach(u => {
  const sql = `INSERT INTO users (name,email,phone,company,street,city,zipcode,lat,lng) VALUES (?,?,?,?,?,?,?,?,?)`;
  db.run(sql, [u.name,u.email,u.phone,u.company,u.street,u.city,u.zipcode,u.lat,u.lng], function(err) {
    if (err) console.error('Seed error', err.message);
    else console.log('Inserted user id', this.lastID);
  });
});