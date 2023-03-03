
const userModel = require('../models/userModels');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const LoginController = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })
        if (!user) {
            return res.status(200).send({
                success: false,
                message: "User not found"
            })
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(200).sned({
                message: "Invalid email or password please try again",
                success: false
            })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" })
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
const RegisterController = async (req, res) => {
    try {
        const existUser = await userModel.findOne({ email: req.body.email })
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
        const newUser = new userModel(req.body);
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

// Auth Controllers to check the user 
const AuthControllers = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.body.userId })
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


module.exports = {
    LoginController,
    RegisterController,
    AuthControllers
}