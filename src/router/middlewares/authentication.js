const UserModel = require('./../../database/models/user');

const authentication = async (req, res, next) => {
	const { email, password } = req.body;

	try {
		req.token = await UserModel.authenticateBasic(email, password);
		next();
	} catch (e) {
		res.status(400).json('incorrect credentials');
	}
};

module.exports = authentication;
