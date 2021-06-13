const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const user = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true, min: 6, max: 18 },
});

// Hashed the password
user.pre('save', async function () {
	try {
		this.email = this.email.toLowerCase();
		this.password = await bcrypt.hash(this.password, Number(process.env.SALT));
	} catch (error) {
		throw new Error(error.message);
	}
});

user.pre('findOneAndUpdate', async function () {
	try {
		this._update.password = await bcrypt.hash(
			this._update.password,
			Number(process.env.SALT),
		);
	} catch (error) {
		throw new Error(error.message);
	}
});

// BASIC AUTH
user.statics.authenticateBasic = async function (email, password) {
	try {
		const user = await this.findOne({ email });
		if (!user) return ["The email doesn't exist", 404];

		const valid = await bcrypt.compare(password, user.password);
		if (valid) {
			const options = {
				expiresIn: '60m',
			};

			return jwt.sign({ user }, process.env.SECRET, options);
		}
		return ['The password you’ve entered is incorrect', 403];
	} catch (error) {
		throw new Error(error.message);
	}
};

// BEARER AUTH
user.statics.authenticateWithToken = async function (token) {
	try {
		const parsedToken = jwt.verify(token, process.env.SECRET);
		const user = await this.findOne({ username: parsedToken.username });
		if (user) {
			return user;
		}
		throw new Error('User Not Found');
	} catch (e) {
		throw new Error(e.message);
	}
};

module.exports = mongoose.model('User', user);
