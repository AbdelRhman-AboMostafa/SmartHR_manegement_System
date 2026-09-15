const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: "*",
    }
))

app.get("/api/health",(req,res)=>{
    res.status(200).json({success: true,message: "Server is running"})
})

module.exports = app;