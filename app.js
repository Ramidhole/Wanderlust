const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/",(req,res)=>{
    res.send("Hi, i am root");
});

app.listen(7000,()=>{
    console.log("server is listening to port 7000");
});