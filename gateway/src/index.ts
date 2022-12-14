import gateway from "fast-gateway"
const port = 5000
import dotenv from "dotenv";
import * as path from "path"
dotenv.config({path:path.resolve("./src/env/gateway.env")});
const server  =gateway({
    routes:[{
        prefix:process.env.USER_URL as string,
        target:process.env.USER_URI as string
    },{
        prefix:process.env.BOOK_URL as string,
        target:process.env.BOOK_URI as string
    }]
})

server.get("/gateway",(req,res)=>{
    return res.send({message:"Server Gateway Running!!!"})
})

server.start(port);
console.log("API Gateway Running !!!");
