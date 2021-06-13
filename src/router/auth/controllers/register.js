'use strict';

require('dotenv').config();

const collection = require('./../../../database/controller/data-collection');
const UserModel = require('./../../../database/models/user');
const userCollection = new collection(UserModel);

const registerHandler = async (req, res) => {
	try {
		const response = await userCollection.create(req.body);
		res.status(201).json(response);
	} catch (e) {
		res.status(400).json(e.message);
	}
};

module.exports = {
	registerHandler,
};
