const Tasks = require('../models/Task');
const mongoose = require('mongoose');

const getAllTasks = async (req,res)=> {
    const tasks = await Tasks.find({userid:req.user.id}).sort({createAt:-1})  
    res.json(tasks)
}

const getTask = async (req,res)=> {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(404).json({error:"no such task exists"})
    }
    const task = await Tasks.find({_id: req.params.id})
    res.json(task)
}

const createTask = async (req,res)=> {

    const {title, details} = req.body;

    try {
        const task = await Tasks.create({title,details,userid:req.user.id})
        res.status(200).json(task)
    } catch(error) {
        res.status(400).json({error:error.message})
    }
}

const deleteTask = async (req,res)=> {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(404).json({error:"no such task exists"})
    }
    const task = await Tasks.findById(req.params.id)
    if(!task) {
        res.status(404).json({error:"no such task"})
    }
    if(task.userid.toString() !== req.user.id) {
        return res.status(401).json({error:"not allowed to delete"});
    }
    const DeletedTask = await Tasks.findByIdAndDelete(req.params.id)
    res.json({DeletedTask})
}

module.exports = { getAllTasks, getTask, createTask, deleteTask };