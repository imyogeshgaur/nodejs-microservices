import express from "express";
const app = express();
import dotenv from "dotenv";
import * as path from "path"
import { createConnection } from "./database/db.config";
import Book from "./model/books.entity";
dotenv.config({path:path.resolve("./src/env/book.env")});

createConnection();
app.use(express.urlencoded({extended:true}));

app.get("/list",async(req,res)=>{
    try {
        const books = await Book.find().limit(5);
        return res.status(200).send(books);
    } catch (error) {
        console.log(error);   
        return res.status(500).send("Internal server Error !!!");
    }
})
app.get("/get/:name",async(req,res)=>{
    try {
        const name = req.params.name;
        const book = await Book.findOne({name});
        return res.status(200).send(book);
    } catch (error) {
        console.log(error);   
        return res.status(500).send("Internal server Error !!!");
    }
})

app.post("/add",async(req,res)=>{
    try {
        const{name,author,price,language,available} = req.body;
        const newBook = new Book({name,author,price,language,available});
        const book =  await newBook.save();
        return res.status(201).send(book);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal server Error !!!");
    }
})

app.put("/update/:name",async(req,res)=>{
    try {
        const name = req.params.name;
        const data = req.body;
        await Book.updateOne({name},data)
        return res.status(200).send("Updated Sucessfully !!!");
    } catch (error) {
        console.log(error);   
        return res.status(500).send("Internal server Error !!!");
    }
})

app.delete("/delete/:name",async(req,res)=>{
    try {
        const name = req.params.name;
        await Book.deleteOne({name})
        return res.status(200).send("Deleted Sucessfully !!!");
    } catch (error) {
        console.log(error);   
        return res.status(500).send("Internal server Error !!!");
    }
})
app.listen(5002,()=>console.log("Books Service is Running !!!!"))