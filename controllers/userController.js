
// const userModel = require('../models/userModels');
// const studentModel = require('../models/studentModel')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken');
// const { findOneAndUpdate } = require('../models/userModels');
// const LoginController = async (req, res) => {
//     try {
//         const user = await userModel.findOne({ email: req.body.email })
//         if (!user) {
//             return res.status(200).send({
//                 success: false,
//                 message: "User not found"
//             })
//         }
//         const isMatch = await bcrypt.compare(req.body.password, user.password);
//         if (!isMatch) {
//             return res.status(200).sned({
//                 message: "Invalid email or password please try again",
//                 success: false
//             })
//         }
//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" })
//         res.status(200).send({
//             success: true,
//             message: "Login Successfuly",
//             token,
//         })
//     } catch (error) {
//         console.log(error)
//         res.status(401).send({
//             success: false,
//             message: "error during login user",
//             error,
//         })
//     }
// }
// const RegisterController = async (req, res) => {
//     try {
//         const existUser = await userModel.findOne({ email: req.body.email })
//         if (existUser) {
//             res.status(201).send({
//                 success: false,
//                 message: "User Another email email exists"
//             })
//         }

//         const password = req.body.password;
//         const salt = await bcrypt.genSalt(12);
//         const hashPassword = await bcrypt.hash(password, salt)
//         req.body.password = hashPassword;
//         const newUser = new userModel(req.body);
//         await newUser.save();
//         res.status(201).send({
//             success: true,
//             message: "Register Successfully",
//         })
//     } catch (error) {
//         console.log(error)
//         res.status(401).send({
//             success: false,
//             message: `Register Controller ${error.message}`
//         })
//     }
// }

// // Auth Controllers to check the user
// const AuthControllers = async (req, res) => {
//     try {
//         const user = await userModel.findOne({ _id: req.body.userId })
//         user.password = undefined;
//         if (!user) {
//             return res.status(401).send({
//                 message: "user not found",
//                 success: false,
//             })
//         } else {
//             res.status(201).send({
//                 message: "Welcome",
//                 success: true,
//                 data: user,
//             })
//         }

//     } catch (error) {
//         console.log(error)
//         res.status(401).send({
//             message: "Auth failed",
//             success: false,
//         })
//     }
// }

// // to get the user data from database
// const getUserInfoController = async (req, res) => {
//     try {
//         const employess = await userModel.findOne({ _id: req.body.userId })
//         // console.log(employess);
//         res.status(200).send({
//             success: true,
//             message: "User find Successfuly",
//             data: employess,
//         })
//     } catch (error) {
//         console.log(error)
//         res.status(401).send({
//             message: "Data can't not get",
//             success: false,
//         })
//     }
// }

// const getUpdateProfileController = async (req, res) => {
//     try {
//         const user = await userModel.findOneAndUpdate({
//             _id: req.body.userId
//         },
//             req.body
//         )
//         res.status(201).send({
//             success: true,
//             message: "User Profile Updated",
//             data: user
//         })
//     } catch (error) {
//         console.log(error)
//         res.status(401).send({
//             message: "Profile can't updated",
//             success: false
//         })
//     }
// }

// const getAllStudentController = async (req, res) => {
//     try {
//         const student = await userModel.find({ isStudent: true })
//         // console.log(student);
//         res.status(201).send({
//             success: true,
//             message: "All students find",
//             data: student,
//         })
//     } catch (error) {
//         res.status(401).send({
//             message: "Opps Student dose not exists",
//             success: false
//         })
//     }
// }

// const SetStudentAttenous = async (req, res) => {
//     try {

//         const { studentId, student_name, student_email, Student, student_department, attenous } = req.body;
//         const Newstudent = new studentModel(studentId, student_name, student_email, Student, student_department)
//         await Newstudent.save();
//         console.log(Newstudent);
//         // const user = await userModel.findOneAndUpdate(studentId, (attenous))

//         // console.log(student)
//         // await user.save();
//         res.status(201).send({
//             success: true,
//             message: 'Account status Updated',
//             data: Newstudent,
//         })

//     } catch (error) {
//         res.status(401).send({
//             message: "Sorry user dose not exists",
//             success: false
//         })
//     }
// }

// module.exports = {
//     LoginController,
//     RegisterController,
//     AuthControllers,
//     getUserInfoController,
//     getUpdateProfileController,
//     getAllStudentController,
//     SetStudentAttenous
// }