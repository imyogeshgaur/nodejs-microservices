import express from "express";
const app = express();
import dotenv from "dotenv";
import * as path from "path"
import { createConnection } from "./database/db.config";
import User from "./model/users.entity";
dotenv.config({path:path.resolve("./src/env/user.env")});

createConnection();
app.use(express.urlencoded({extended:true}));

app.get("/list",async(req,res)=>{
    try {
        const users = await User.find().limit(5);
        return res.status(200).send(users);
    } catch (error) {
        console.log(error);   
        return res.status(500).send("Internal server Error !!!");
    }
})
app.get("/get/:email",async(req,res)=>{
    try {
        const email = req.params.email;
        const user = await User.findOne({email});
        return res.status(200).send(user);
    } catch (error) {
        console.log(error);   
        return res.status(500).send("Internal server Error !!!");
    }
})

app.post("/create",async(req,res)=>{
    try {
        const{name,email,phone,location,company,position} = req.body;
        const newUser = new User({name,email,phone,location,company,position});
        const user=  await newUser.save();
        return res.status(201).send(user);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server Error !!!");
    }
})

app.put("/update/:email",async(req,res)=>{
    try {
        const email = req.params.email;
        const data = req.body;
        console.log(data);
        await User.updateOne({email},data)
        return res.status(200).send("Updated Sucessfully !!!");
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server Error !!!");
    }
});

app.delete("/delete/:email",async(req,res)=>{
    try {
        const email = req.params.email;
        const user = await User.deleteOne({email})
        console.log(user);
        return res.status(200).send("Deleted Sucessfully !!!");
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server Error !!!");
    }
});

app.listen(5001,()=>console.log("User Service is Running !!!!"))