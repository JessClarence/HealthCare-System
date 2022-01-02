const mongoose = require('mongoose');

const doctor = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    qualification:{
        type: String,
        required: true
    },
    mobileNo:{
        type: Number,
        required: true,
        unique: true
    },
    email:{

    }
});


const Doctordb = mongoose.model('doctordb', doctor);

module.exports = Doctordb;