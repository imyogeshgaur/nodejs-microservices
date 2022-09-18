import mongoose, { Schema } from "mongoose";

const bookSchema:Schema  = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    language:String,
    available:Boolean,
})

const Book = mongoose.model("book",bookSchema);
export default Book ;
