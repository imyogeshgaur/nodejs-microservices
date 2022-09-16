import express from "express";
const app = express();
import dotenv from "dotenv";
import * as path from "path"
dotenv.config({path:path.resolve("./src/env/user.env")});


app.get("/getuser",(req,res)=>{
    return res.send({
        name:process.env.NAME,
        email:process.env.EMAIL,
        phone:process.env.PHONE,
        location:process.env.LOCATION,
        company:process.env.COMPANY,
        position:process.env.POSITION
    })
})

app.listen(5001,()=>console.log("User Service is Running !!!!"))