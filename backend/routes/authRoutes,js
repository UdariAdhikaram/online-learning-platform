const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body; // Destructure the request body to get user details
    try {
      const hashedPassword = await bcrypt.hash(password, 10); // Hash the user's password with a salt round of 10
      const user = new User({ name, email, password: hashedPassword, role }); // Create a new user object
      await user.save(); // Save the user to the database
      res.status(201).json({ message: 'User registered successfully' }); // Send a success response
    } catch (error) {
      res.status(500).json({ error: 'User registration failed' }); // Send an error response if something goes wrong
    }
  });
  

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body; // Destructure to get email and password from the request body
    try {
      const user = await User.findOne({ email }); // Find the user by email
      if (!user || !(await bcrypt.compare(password, user.password))) { // Check if user exists and if the password matches
        return res.status(401).json({ error: 'Invalid credentials' }); // Return an error if invalid credentials
      }
      const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET); // Create a JWT token
      res.json({ token }); // Send the token back to the client
    } catch (error) {
      res.status(500).json({ error: 'Login failed' }); // Return an error if login fails
    }
  });
  
module.exports = router;
