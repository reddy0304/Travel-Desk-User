const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require("./routes/userRoutes");

dotenv.config();
//connectDB();

app.use(express.json());

app.use("/api/users", userRoutes);

app.get('/',(req,res) =>{
    res.send("Hello World")
})

app.listen(5000,() =>{
    console.log("server running....")
})