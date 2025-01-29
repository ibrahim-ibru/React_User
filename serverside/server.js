import express from "express"
import env from "dotenv"
import connection from "./conection.js"
import router from "./router.js"
import cors from "cors"

env.config()
const app=express()
app.use(cors());
app.use(express.json())
app.use("/api",router)


connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server starts on http://localhost:${process.env.PORT}/`);
        
    })
})