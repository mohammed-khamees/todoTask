'use strict';

const express = require('express');
const Router = express.Router();

const { registerHandler } = require('./../controllers/register');

Router.post('/register', registerHandler);

module.exports = Router;
