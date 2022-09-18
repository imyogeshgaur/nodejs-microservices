import mongoose, { Schema } from "mongoose";

const userSchema:Schema  = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    },
    location:String,
    company:String,
    position:String
})

const User = mongoose.model("User",userSchema);
export default User ;
