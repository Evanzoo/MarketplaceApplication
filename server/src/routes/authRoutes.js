const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const router = express.Router();

const authController = require('../controllers/authController');

// Register User
router.post('/register', authController.register);

// Login User
router.post('/login', authController.login);

// Update User
router.put('/update/:userId', authController.updateUser);

// Delete User
router.delete('/delete/:userId', authController.deleteUser);

module.exports = router;

