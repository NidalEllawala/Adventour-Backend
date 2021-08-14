const router = require('express').Router();
const { sequelize } = require('../model/index');
//const { getHelloWorld } = require('../controller/helloWorld');

const { registerUser, loginUser } = require('../controller/user');

router.post('/registerUser', registerUser);
router.post('/loginUser', loginUser);
//router.get('/', getHelloWorld);

module.exports = { router };
