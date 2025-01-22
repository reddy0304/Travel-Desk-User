const express = require('express');
const router = express.Router();
const { signupUser, loginUser, getUserProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

// Register route
router.post('/register', signupUser);

// Login route
router.post('/login', loginUser);

// Get user profile (protected route)
router.get('/profile', authMiddleware, getUserProfile);

module.exports = router;

