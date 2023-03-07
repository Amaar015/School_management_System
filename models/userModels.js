const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"]
    },
    email: {
        type: String,
        required: [true, "Email is Required"]
    },
    department: {
        type: String,
        required: true
    },
    dateofbirth: {
        type: String,
        required: true
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

    isAdmin: {
        type: Boolean,
        default: false,
    },
    isStudent: {
        type: Boolean,
        default: false,
    },
    isTeacher: {
        type: Boolean,
        default: false,
    },
    notification: {
        type: Array,
        dafault: []
    },
    SeenNotification: {
        type: Array,
        dafault: [],
    }
})

// create a database Model
const userModel = mongoose.model('userdb', userSchema)
// exports a userModel
module.exports = userModel;