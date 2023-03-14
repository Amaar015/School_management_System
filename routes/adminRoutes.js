const express = require('express');
const { adminRegisterController, adminLoginController, AuthControllers, StudentRegisterController, getStudentInfo, DeleteStdProfileController, getStudentInfoController, getUpdateProfileController, TeacherRegisterController } = require('../controllers/AdminController')
const authMiddleware = require('../midlewares/authMiddleware');
const router = express.Router();


// Routes
// User Login controller
router.post('/adminlogin', adminLoginController)

// User Register Controller


router.post('/adminregister', adminRegisterController)

// Home page auth Controller
router.post('/setUserData', authMiddleware, AuthControllers)

// get the user Date 
router.post('/setStudentdata', authMiddleware, StudentRegisterController)


router.get('/getStudentInfo', authMiddleware, getStudentInfo)

//  Delete Student
router.post('/DeleteStdprofile', authMiddleware, DeleteStdProfileController)

// getSingle student by email
router.post('/getStudentInfo', authMiddleware, getStudentInfoController)
// update profile
router.post('/updateProfile', authMiddleware, getUpdateProfileController)


// Teacher routes
router.post('/setTeacherdata', authMiddleware, TeacherRegisterController)

module.exports = router;
