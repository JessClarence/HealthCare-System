const mongoose = require('mongoose');

const member = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    mobileNo:{
        type: Number,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },

});



const Memberdb = mongoose.model('memberdb', member);


module.exports = Memberdb;
