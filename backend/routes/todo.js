const express = require('express');
const router = express.Router();
const Tasks = require('../models/Task')
const {getAllTasks, getTask, createTask, deleteTask} = require('../controllers/taskController')
const fetchuser = require('../middleware/fetchuser')

router.get('/',fetchuser, getAllTasks);

router.get('/:id',fetchuser,getTask)

router.post('/',fetchuser, createTask);

router.delete('/:id',fetchuser,deleteTask)

module.exports = router;