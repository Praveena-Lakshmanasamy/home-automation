// /backend/models/User.js

const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  // Add other fields as needed (e.g., profile picture, etc.)
}, { timestamps: true });  // Adds createdAt and updatedAt fields

// Create a User model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
