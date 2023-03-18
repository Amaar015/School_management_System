
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const adminModel = require('../models/AdminModel')
const stdModel = require('../models/studentModel');
const teacherModel = require('../models/teacherModels')
// Register Controller
const adminRegisterController = async (req, res) => {
    try {
        const existUser = await adminModel.findOne({ email: req.body.email })
        if (existUser) {
            res.status(201).send({
                success: false,
                message: "User Another email email exists"
            })
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(12);
        const hashPassword = await bcrypt.hash(password, salt)
        req.body.password = hashPassword;
        const newUser = new adminModel(req.body);
        await newUser.save();
        res.status(201).send({
            success: true,
            message: "Register Successfully",
        })
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success: false,
            message: `Register Controller ${error.message}`
        })
    }
}

// admin login controller
const adminLoginController = async (req, res) => {
    try {
        const user = await adminModel.findOne({ email: req.body.email })
        if (!user) {
            return res.status(200).send({
                success: false,
                message: "User not found"
            })
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(200).send({
                message: "Invalid email or password ",
                success: false
            })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" })
        console.log(token)
        res.status(200).send({
            success: true,
            message: "Login Successfuly",
            token,
        })
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success: false,
            message: "error during login user",
            error,
        })
    }
}
// store student data into studentmodel
const StudentRegisterController = async (req, res) => {
    try {
        const existUser = await stdModel.findOne({ email: req.body.email })
        if (existUser) {
            res.status(201).send({
                success: false,
                message: "Already exists"
            })
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(12);
        const hashPassword = await bcrypt.hash(password, salt)
        req.body.password = hashPassword;
        const newUser = new stdModel(req.body);
        await newUser.save();
        res.status(201).send({
            success: true,
            message: "Register Successfully",
        })
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success: false,
            message: `Register Controller ${error.message}`
        })
    }
}


// // Auth Controllers to check the user
const AuthControllers = async (req, res) => {
    try {
        const user = await adminModel.findOne({ _id: req.body.userId })
        user.password = undefined;
        if (!user) {
            return res.status(401).send({
                message: "user not found",
                success: false,
            })
        } else {
            res.status(201).send({
                message: "Welcome",
                success: true,
                data: user,
            })
        }

    } catch (error) {
        console.log(error)
        res.status(401).send({
            message: "Auth failed",
            success: false,
        })
    }
}


const getStudentInfo = async (req, res) => {
    try {
        const student = await stdModel.find()
        // console.log(student);
        res.status(200).send({
            success: true,
            message: "User find Successfuly",
            data: student,
        })
    } catch (error) {
        console.log(error)
        res.status(401).send({
            message: "Data can't not get",
            success: false,
        })
    }
}

const DeleteStdProfileController = async (req, res) => {
    try {
        console.log(req.body.StdEmail)
        const student = await stdModel.findOneAndDelete({ email: req.body.StdEmail })
        res.status(200).send({
            success: true,
            message: "User deleted successfuly",
            data: student,
        })
    } catch (error) {
        res.status(401).send({
            success: false,
            message: "Opps Something went wrong"
        })
    }
}
// // to get the user data from database
const getStudentInfoController = async (req, res) => {
    try {
        const student = await stdModel.findOne({ email: req.body.stdEmail })
        // console.log(student);
        res.status(200).send({
            success: true,
            message: "Student find Successfuly",
            data: student,
        })
    } catch (error) {
        console.log(error)
        res.status(401).send({
            message: "Data can't not get",
            success: false,
        })
    }
}

const getUpdateProfileController = async (req, res) => {
    try {
        const UpdateStd = await stdModel.findOneAndUpdate({
            email: req.body.StdEmail
        },
            req.body
        )
        res.status(201).send({
            success: true,
            message: "User Profile Updated",
            data: UpdateStd
        })
    } catch (error) {
        console.log(error)
        res.status(401).send({
            message: "Profile can't updated",
            success: false
        })
    }
}



// Functions for the teachers
const TeacherRegisterController = async (req, res) => {
    try {
        const existUser = await teacherModel.findOne({ email: req.body.email })
        if (existUser) {
            res.status(201).send({
                success: false,
                message: "Already exists"
            })
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(12);
        const hashPassword = await bcrypt.hash(password, salt)
        req.body.password = hashPassword;
        const newUser = new teacherModel(req.body);
        await newUser.save();
        res.status(201).send({
            success: true,
            message: "Register Successfully",
        })
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success: false,
            message: `Register Controller ${error.message}`
        })
    }
}

const getTeacherInfo = async (req, res) => {
    try {
        const teacher = await teacherModel.find()
        // console.log(student);
        res.status(200).send({
            success: true,
            message: "User find Successfuly",
            data: teacher,
        })
    } catch (error) {
        console.log(error)
        res.status(401).send({
            message: "Data can't not get",
            success: false,
        })
    }
}

const DeleteTeacherProfileController = async (req, res) => {
    try {
        // console.log(req.body.TeacherEmail)
        const teacher = await teacherModel.findOneAndDelete({ email: req.body.TeacherEmail })
        res.status(200).send({
            success: true,
            message: "User deleted successfuly",
            data: teacher,
        })
    } catch (error) {
        res.status(401).send({
            success: false,
            message: "Opps Something went wrong"
        })
    }
}
// // // to get the user data from database
const getTeacherInfoController = async (req, res) => {
    try {
        const teacher = await teacherModel.findOne({ email: req.body.TeacherEmail })
        // console.log(student);
        res.status(200).send({
            success: true,
            message: "Teacher find Successfuly",
            data: teacher,
        })
    } catch (error) {
        console.log(error)
        res.status(401).send({
            message: "Data can't not get",
            success: false,
        })
    }
}

const getUpdateTeacherProfileController = async (req, res) => {
    try {
        const UpdateTeacher = await teacherModel.findOneAndUpdate({
            email: req.body.TeacherEmail
        },
            req.body
        )
        res.status(201).send({
            success: true,
            message: "User Profile Updated",
            data: UpdateTeacher
        })
    } catch (error) {
        console.log(error)
        res.status(401).send({
            message: "Profile can't updated",
            success: false
        })
    }
}






module.exports = {
    adminLoginController,
    adminRegisterController,
    AuthControllers,
    StudentRegisterController,
    getStudentInfo,
    DeleteStdProfileController,
    getStudentInfoController,
    getUpdateProfileController,
    TeacherRegisterController,
    getTeacherInfo,
    DeleteTeacherProfileController,
    getTeacherInfoController,
    getUpdateTeacherProfileController

}