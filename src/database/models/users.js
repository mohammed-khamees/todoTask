const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const user = new mongoose.Schema({
	firstName: { type: String },
	lastName: { type: String },
	password: { type: String, required: true },
});

// Hashed the password
user.pre('save', async function () {
	this.email = this.email.toLowerCase();
	this.password = await bcrypt.hash(this.password, 10);
});

// BASIC AUTH
user.statics.authenticateBasic = async function (email, password) {
	try {
		const user = await this.findOne({ email });
		if (!user) return ["The email doesn't exist", 404];

		const valid = await bcrypt.compare(password, user.password);
		if (valid) {
			const payload = {
				userId: user._id,
			};

			const options = {
				expiresIn: '60m',
			};

			return [jwt.sign(payload, process.env.SECRET, options), 200];
		}
		return ['The password you’ve entered is incorrect', 403];
	} catch (error) {
		throw new Error(error.message);
	}
};

module.exports = mongoose.model('User', user);
