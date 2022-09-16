import express from "express";
const app = express();
import dotenv from "dotenv";
import * as path from "path"
dotenv.config({path:path.resolve("./src/env/book.env")});


app.get("/getbook",(req,res)=>{
    return res.send({
        name:process.env.NAME,
        author:process.env.AUTHOR,
        price:process.env.PRICE,
        language:process.env.LANGUAGE,
        availablity:process.env.AVAILABLE
    })
})

app.listen(5002,()=>console.log("Books Service is Running !!!!"))