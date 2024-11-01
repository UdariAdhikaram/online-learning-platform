const express = require('express');
const Course = require('../models/Course');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Create Course
router.post('/', authenticateToken, async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create course' });
  }
});

// Additional routes for Read, Update, and Delete
