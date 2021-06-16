const mongoose = require('mongoose');
const moment = require('moment');

const task = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	priority: { type: String, required: true },
	isCompleted: { type: Boolean, default: false },
	time: { type: String, default: moment().format('llll') },
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Task', task);
