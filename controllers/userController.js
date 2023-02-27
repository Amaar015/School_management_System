const userModel = require('../models/userModels');
const bcrypt = require('bcryptjs')
const LoginController = () => {

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
        res.send(201).send({
            success: false,
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

module.exports = {
    LoginController,
    RegisterController
}