const express = require("express");
const mongoose = require("mongoose");
const router = require('./routes/todo');
const auth = require('./routes/auth');
const path = require('path')
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api/todo',router);
app.use(express.static(path.join(__dirname + "/public")))

mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        app.listen(4000,()=> {
            console.log("connected to db and listening for requests");
        })
    })
    .catch((error)=> {
        console.log(error)
    })
