'use strict';

const express = require('express');
const Router = express.Router();

const authentication = require('./../../middlewares/authentication');
const authorization = require('./../../middlewares/authorization');

const { loginHandler, updateInfoHandler } = require('./../controllers/login');

Router.post('/login', authentication, loginHandler);
Router.put('/updateInfo/:id', authorization, updateInfoHandler);

module.exports = Router;
