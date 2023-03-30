const dotenv = require("dotenv").config () ;
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require ("cors");
const { urlencoded } = require("body-parser");
 
const app = express()

// Middlewares
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}))


//Routes
//callback function get reaquest and response obj
app.get("/", (req,res) => {
  res.send("Home Page")
})


//Connect to DB and start server
const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGO_URI)
    .then (() => {
        console.log(`Server Running on port ${PORT}`);
    })
    .catch((err) => console.log(err));
