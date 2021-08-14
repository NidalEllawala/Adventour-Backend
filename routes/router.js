const router = require('express').Router();
const { sequelize } = require('../model/index');
//const { getHelloWorld } = require('../controller/helloWorld');

const { registerUser } = require('../controller/user');

router.post('/registerUser', registerUser);

//router.get('/', getHelloWorld);

module.exports = { router };
