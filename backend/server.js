const express = require("express");
const mongoose = require("mongoose");
const router = require('./routes/todo');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api/todo',router);

mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        app.listen(4000,()=> {
            console.log("connected to db and listening for requests");
        })
    })
    .catch((error)=> {
        console.log(error)
    })
