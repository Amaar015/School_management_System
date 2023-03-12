const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"]
    },
    fatherName: {
        type: String,
        required: [true, "Father-Name is Required"]
    },
    department: {
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

    id: {
        type: String,

    },
    age: {
        type: Number,
        required: true,
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
    isStudent: {
        type: Boolean,
        default: true,
    },
    createdby: {
        type: String,
        required: true,
    }
    ,
    gender: {
        type: String,
        required: true,
    },
    admission: {
        type: String,
        required: true,
    }

})

// create a database Model
const studentModel = mongoose.model('studentdb', studentSchema)
// exports a userModel
module.exports = studentModel;