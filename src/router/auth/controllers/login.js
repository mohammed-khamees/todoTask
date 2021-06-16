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
		const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (emailRegex.test(req.body.email)) {
			if (req.body.password) {
				const user = await userCollection.update(userId, req.body);
				res.status(200).json(user);
			} else {
				throw new Error('Please the password is required');
			}
		} else {
			throw new Error('Please fill a valid email address');
		}
	} catch (e) {
		res.status(403).json(e.message);
	}
};

module.exports = {
	loginHandler,
	updateInfoHandler,
};
