import mongoose from "mongoose";

export const createConnection = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/micro_users");
        console.log("Connected Sucessfully !!!");
    } catch (error) {
        console.log(error);
    }
}