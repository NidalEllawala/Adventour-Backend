const router = require('express').Router();
const { sequelize } = require('../model/index');
//const { getHelloWorld } = require('../controller/helloWorld');

const { registerUser, loginUser } = require('../controller/user');
const { getTours, getIndividualTour } = require('../controller/tour');
const { getBooking } = require('../controller/booking');

router.post('/registerUser', registerUser);
router.post('/loginUser', loginUser);
router.get('/getTours', getTours);
router.get('/getIndividualTour', getIndividualTour);
router.get('/getBooking', getBooking);
//router.get('/', getHelloWorld);

module.exports = { router };
