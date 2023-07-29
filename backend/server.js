const express = require("express");
const mongoose = require("mongoose");
const router = require('./routes/todo');
const auth = require('./routes/auth');
const path = require('path')
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api/todo',router);
app.use('/api/auth',auth);
app.use(express.static(path.join(__dirname + "/public")))

const PORT = process.env.PORT;
    
mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        app.listen(PORT,()=> {
            console.log("connected to db and listening for requests");
        })
    })
    .catch((error)=> {
        console.log(error)
    })
