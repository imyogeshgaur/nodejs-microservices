import gateway from "fast-gateway"
const port = 5000
const server  =gateway({
    routes:[{
        prefix:"/users",
        target:"http://localhost:5001/"
    },{
        prefix:"/books",
        target:"http://localhost:5002/"
    }]
})

server.get("/gateway",(req,res)=>{
    return res.send({message:"Server Gateway Running!!!"})
})

server.start(port);