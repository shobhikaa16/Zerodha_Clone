require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3002; // agar yeh line miss out hojati hai oth deployment  ke time issue ata hai 
const url = process.env.MONGO_URL;

const app = express();


app.listen(3002, ()=>{
    console.log("App started!")
    mongoose.connect(url)
    console.log("DB connected!") // eh dono likh kar aarhe hai mtlb databse successfully connect hogya hai
});