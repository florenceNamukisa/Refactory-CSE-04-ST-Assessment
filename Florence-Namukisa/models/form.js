const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
    dateOfBirth: {
        type: String,
        trim: true,
    },
    nationality: {
        type: String,
        trim: true,
    },
    info: {
        type: String,
        trim: true,
    },
    phoneNumber: {
        type: String, // Changed from Number to String to handle leading zeros and larger numbers
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    pNumber: {
        type: String, // Changed from Number to String
        trim: true,
    },
    emergency: {
        type: String, // Changed from Number to String
        trim: true,
    },
    rinfo: {
        type: String,
        trim: true,
    },
    passNumber: {
        type: String,
        trim: true,
    },
    visa: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        trim: true,
    },
    dCity: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Form', formSchema);
