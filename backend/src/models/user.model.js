const { AuthWeakPasswordError } = require('@supabase/supabase-js')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type : String,
        unique :[true ,"Username already exists"],
        required : [true, "Username is required"]
    },
    email : {
        type : String,
        unique : [true, "Email already exists with this email exists"],
        required : [true, "Email is required"]
    },
    password : {
        type : String,
        required : [true, "Password is required"]
    }

})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel