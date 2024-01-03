const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route to display the login form
router.get('/login', authController.showLoginForm);

// Route to process login
router.post('/auth', authController.login);

// Route to renew the access token
router.post('/token', authController.refreshToken);

module.exports = router;
