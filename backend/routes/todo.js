const express = require('express');
const router = express.Router();
const Tasks = require('../models/Task')
const {getAllTasks, getTask, createTask, deleteTask} = require('../controllers/taskController')

router.get('/', getAllTasks);

router.get('/:id',getTask)

router.post('/', createTask);

router.delete('/:id',deleteTask)

module.exports = router;