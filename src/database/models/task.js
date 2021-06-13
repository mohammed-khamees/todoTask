const mongoose = require('mongoose');

const task = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	priority: { type: String, required: true },
	isCompleted: { type: Boolean, default: false },
	time: { type: Date, default: new Date().toUTCString() },
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Task', task);
