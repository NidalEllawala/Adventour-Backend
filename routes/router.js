const router = require('express').Router();
const { getHelloWorld } = require('../controller/helloWorld');

router.get('/', getHelloWorld);

module.exports = { router };
