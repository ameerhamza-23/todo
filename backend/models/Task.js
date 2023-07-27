const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title : {
        type:String,
        required:true
    },
    details :{
        type:String,
    },
    userid : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
},{timestamps:true})

module.exports = mongoose.model('task',taskSchema);