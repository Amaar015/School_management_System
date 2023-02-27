const express = require('express');
const { LoginController, RegisterController } = require('../controllers/userController');

const router = express.Router();


// Routes
// User Login controller
router.post('/login', LoginController)

// User Register Controller

router.post('/register', RegisterController)


