'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');

// Prepare the express app
const app = express();

//routers
const registerRouter = require('./router/auth/routes/register');
const userRouter = require('./router/auth/routes/login');
const tasksRouter = require('./router/routes/tasks');

const errorHandler = require('./router/error-handlers/500.js');
const notFound = require('./router/error-handlers/404.js');

//Built-in MW
app.use(express.json());

// Third Party MW
app.use(cors());

// App Level MW
app.use(registerRouter);
app.use(userRouter);
app.use('/tasks', tasksRouter);
app.use('*', notFound);
app.use(errorHandler);

module.exports = {
	start: (port) => {
		if (!port) {
			throw new Error('Missing Port');
		}
		app.listen(port, () => console.log(`Listening on ${port}`));
	},
};
