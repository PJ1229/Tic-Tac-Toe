const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware to parse JSON
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.send('MERN Stack API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});