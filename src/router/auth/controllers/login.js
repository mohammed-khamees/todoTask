'use strict';

require('dotenv').config();

const loginHandler = (req, res) => {
	try {
		res.status(200).json(req.token);
	} catch (e) {
		res.status(403).json(e.message);
	}
};

module.exports = {
	loginHandler,
};
