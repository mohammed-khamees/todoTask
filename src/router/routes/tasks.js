const express = require('express');
const {
	getAllTasks,
	createNewTasks,
	updateAnTasksById,
	deleteTasksById,
} = require('./../controllers/tasks');

const tasksRouter = express.Router();

tasksRouter.get('/', getAllTasks);
tasksRouter.post('/', createNewTasks);
tasksRouter.put('/:id', updateAnTasksById);
tasksRouter.delete('/:id', deleteTasksById);

module.exports = tasksRouter;
