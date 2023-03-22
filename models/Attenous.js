const mongoose = require('mongoose');

const AttenousSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    department: {
        type: String,
        require: true
    },
    id: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now(),
    }


})

const attenous = mongoose.model('AttenousDB', AttenousSchema);
module.exports = attenous;