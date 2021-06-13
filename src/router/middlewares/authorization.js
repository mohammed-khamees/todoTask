const UserModel = require('./../../database/models/user');

const authorization = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ').pop();

		const validUser = await UserModel.authenticateWithToken(token);
		req.user = validUser;
		next();
	} catch (e) {
		res.status(403).send('Invalid Login');
	}
};

module.exports = authorization;
