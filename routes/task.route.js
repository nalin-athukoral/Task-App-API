const express = require('express');
const logger = require('../middlware/authmiddlware');
const { getAllTasks, createTask, deleteTask, getSingleTask, updateTask } = require('../controllers/task.controller');

const taskRouter = express.Router();

taskRouter.get('/', getAllTasks );
taskRouter.get('/:id', getSingleTask);
taskRouter.post('/', createTask);
taskRouter.put('/:id', updateTask);
taskRouter.delete('/:id', deleteTask);



module.exports = taskRouter;