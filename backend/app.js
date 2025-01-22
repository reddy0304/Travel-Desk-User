const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();

const corsOptions = {
    origin: 'http://localhost:5173',  // Replace with your frontend's URL
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
};
  
app.use(cors(corsOptions)); // Enable CORS

app.use(express.json());

app.use("/api/users", userRoutes);

app.get('/',(req,res) =>{
    res.send("Hello World")
})

app.listen(5000,() =>{
    console.log("server running....")
})