const express = require('express');
const { stdLoginController, StdAuthControllers, getStudentInfo } = require('../controllers/StudentController')
const authMiddleware = require('../midlewares/authMiddleware');
const router = express.Router();


// Routes
// User Login controller
router.post('/studentlogin', stdLoginController)

// User Register Controller


// router.post('/studentregister', studentRegisterController)

// Home page auth Controller
router.post('/setStdData', authMiddleware, StdAuthControllers)

// Get all studentInfo

router.get('/getStudentInfo', authMiddleware, getStudentInfo)

module.exports = router;
