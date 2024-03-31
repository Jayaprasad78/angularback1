const mongoose = require('mongoose');



const userschema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    work:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cpassword:{
        type: String,
        required: true
    },
    token: { 
        type: String 
    },
});





const user =mongoose.model('new_user',userschema);


module.exports = user;

//hi helo user

