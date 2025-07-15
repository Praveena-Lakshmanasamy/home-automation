// /backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth'); // Import authentication routes

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());  // For parsing application/json

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/smart-home', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error));

// Routes
app.use('/api/auth', authRoutes);  // Auth routes for register and login

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
