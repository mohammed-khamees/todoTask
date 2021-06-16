const collection = require('./../../database/controller/data-collection');
const TaskModel = require('./../../database/models/task');
const taskCollection = new collection(TaskModel);

const getAllTasks = async (req, res) => {
	try {
		const tasks = await taskCollection.get();
		res.status(200).json(tasks);
	} catch (error) {
		res.status(404).json(error.message);
	}
};

const createNewTasks = async (req, res) => {
	try {
		const tasks = await taskCollection.create(req.body);
		res.status(201).json(tasks);
	} catch (error) {
		res.status(400).json(error.message);
	}
};

const updateAnTasksById = async (req, res) => {
	try {
		const taskId = req.params.id;

		const tasks = await taskCollection.update(taskId, req.body);

		res.status(200).json(tasks);
	} catch (error) {
		res.status(400).json(error.message);
	}
};

const deleteTasksById = async (req, res) => {
	try {
		const taskId = req.params.id;

		const tasks = await taskCollection.delete(taskId);

		res.status(200).json(tasks);
	} catch (error) {
		res.status(400).json(error.message);
	}
};

module.exports = {
	getAllTasks,
	createNewTasks,
	updateAnTasksById,
	deleteTasksById,
};
