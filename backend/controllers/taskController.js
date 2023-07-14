const Tasks = require('../models/Task');
const mongoose = require('mongoose');

const getAllTasks = async (req,res)=> {
    const tasks = await Tasks.find({}).sort({createAt:-1});   
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
        const task = await Tasks.create({title,details})
        res.status(200).json(task)
    } catch(error) {
        res.status(400).json({error:error.message})
    }
}

const deleteTask = async (req,res)=> {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(404).json({error:"no such task exists"})
    }
    const task = await Tasks.findOneAndDelete({_id: req.params.id})
    if(!task) {
        res.status(404).json({error:"no such task"})
    }
    res.status(200).json(task)
}

module.exports = { getAllTasks, getTask, createTask, deleteTask };