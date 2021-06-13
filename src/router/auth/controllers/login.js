'use strict';

const collection = require('./../../../database/controller/data-collection');
const UserModel = require('./../../../database/models/user');
const userCollection = new collection(UserModel);

const loginHandler = (req, res) => {
	try {
		res.status(200).json(req.token);
	} catch (e) {
		res.status(403).json(e.message);
	}
};

const updateInfoHandler = async (req, res) => {
	try {
		const userId = req.params.id;
		const user = await userCollection.update(userId, req.body);

		res.status(200).json(user);
	} catch (e) {
		res.status(403).json(e.message);
	}
};

module.exports = {
	loginHandler,
	updateInfoHandler,
};
