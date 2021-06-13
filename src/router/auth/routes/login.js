'use strict';

const express = require('express');
const Router = express.Router();

const authentication = require('./../../middlewares/authentication');

const { loginHandler } = require('./../controllers/login');

Router.post('/login', authentication, loginHandler);

module.exports = Router;
