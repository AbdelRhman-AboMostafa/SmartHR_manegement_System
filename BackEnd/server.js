
const app = require("./src/app");
const mongoose = require("mongoose");

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})

mongoose.connect(process.env.MONGODBURL)
.then(()=>{
    console.log("Database connected successfully")
})
.catch((err)=>{
    console.error("Error connecting to database:", err)
})