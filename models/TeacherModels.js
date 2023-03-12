const mongoose = require('mongoose');


const TeacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"]
    },
    subject: {
        type: String,
        required: true
    },
    dateofbirth: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Email is Required"]
    },
    qualification: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
    mobileNo: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: [true, "Password is Required"]
    },
    isTeacher: {
        type: Boolean,
        default: true,
    }
})

// create a database Model
const userModel = mongoose.model('TeacherDB', userSchema)
// exports a userModel
module.exports = userModel;