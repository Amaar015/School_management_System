
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const stdModel = require('../models/studentModel');
const AttenousModel = require('../models/Attenous')
const stdLoginController = async (req, res) => {
    try {
        const user = await stdModel.findOne({ email: req.body.email })
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


// // // Auth Controllers to check the user
const StdAuthControllers = async (req, res) => {
    try {
        const user = await stdModel.findOne({ _id: req.body.userId })
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

const getoneStudentInfo = async (req, res) => {
    try {
        const student = await stdModel.findOne({ email: req.body.StdEmail })

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

// // const getUpdateProfileController = async (req, res) => {
// //     try {
// //         const user = await userModel.findOneAndUpdate({
// //             _id: req.body.userId
// //         },
// //             req.body
// //         )
// //         res.status(201).send({
// //             success: true,
// //             message: "User Profile Updated",
// //             data: user
// //         })
// //     } catch (error) {
// //         console.log(error)
// //         res.status(401).send({
// //             message: "Profile can't updated",
// //             success: false
// //         })
// //     }
// // }

const getAllStudentInfo = async (req, res) => {
    try {
        const student = await stdModel.find({ isStudent: true })
        // console.log(student);
        res.status(201).send({
            success: true,
            message: "All students find",
            data: student,
        })
    } catch (error) {
        res.status(401).send({
            message: "Opps Student dose not exists",
            success: false
        })
    }
}
const getDepartment = async (req, res) => {
    try {
        const student = await stdModel.find({ department: req.body.department })
        res.status(201).send({
            success: true,
            message: "All students find",
            data: student,
        })
    } catch (error) {
        res.status(401).send({
            message: "Sorry! department dose not exist",
            success: false
        })
    }
}

const getStudentAttenous = async (req, res) => {
    try {
        const attenous = await AttenousModel.find({ id: req.body.stdId })
        res.send({
            message: "Student Attenous",
            success: true,
            data: attenous
        })
    } catch (error) {
        res.status(401).send({
            message: "Attenous dose not fatched",
            success: false,
        })
    }
}
module.exports = {
    stdLoginController,
    StdAuthControllers,
    getoneStudentInfo,
    getAllStudentInfo,
    getDepartment,
    getStudentAttenous
}