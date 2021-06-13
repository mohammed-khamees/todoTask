const express = require('express');
const {
	getAllTasks,
	createNewTasks,
	updateAnTasksById,
	deleteTasksById,
} = require('./../controllers/tasks');

const authorization = require('./../middlewares/authorization');

const tasksRouter = express.Router();

tasksRouter.get('/', authorization, getAllTasks);
tasksRouter.post('/', authorization, createNewTasks);
tasksRouter.put('/:id', authorization, updateAnTasksById);
tasksRouter.delete('/:id', authorization, deleteTasksById);

module.exports = tasksRouter;
