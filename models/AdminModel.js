const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    isAdmin: {
        type: Boolean,
        default: true,
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

const adminModel = mongoose.model('AdminDB', AdminSchema);
module.exports = adminModel;