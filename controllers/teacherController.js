
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const teacherModle = require('../models/TeacherModels')
const teacherLoginController = async (req, res) => {
    try {
        const user = await teacherModle.findOne({ email: req.body.email })
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
        // console.log(token)
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


// // Auth Controllers to check the user
const TeacherAuthControllers = async (req, res) => {
    try {
        const user = await teacherModle.findOne({ _id: req.body.userId })
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
// Functions for the teachers
const TeacherRegisterController = async (req, res) => {
    try {
        const existUser = await teacherModle.findOne({ email: req.body.email })
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
        const newUser = new teacherModle(req.body);
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
        const teacher = await teacherModle.find()
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
        const teacher = await teacherModle.findOneAndDelete({ email: req.body.TeacherEmail })
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
        const teacher = await teacherModle.findOne({ email: req.body.TeacherEmail })
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
        const UpdateTeacher = await teacherModle.findOneAndUpdate({
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

const getoneTeacherInfo = async (req, res) => {
    try {
        const teacher = await teacherModle.findOne({ email: req.body.teacherEmail })

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
const MarkAttendance = async (req, res) => {
    try {

    } catch (error) {
        res.status(401).send({
            message: "Attenous dose not marked",
            success: false,
        })
    }
}

module.exports = {
    TeacherAuthControllers,
    teacherLoginController,
    TeacherRegisterController,
    getTeacherInfo,
    DeleteTeacherProfileController,
    getTeacherInfoController,
    getUpdateTeacherProfileController,
    getoneTeacherInfo,
    MarkAttendance
}