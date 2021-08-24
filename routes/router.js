const router = require('express').Router();

const { registerUser, loginUser } = require('../controller/user');
const { getTours, getIndividualTour } = require('../controller/tour');
const { getBooking, createNewBooking } = require('../controller/booking');
const { joinGame } = require('../controller/player');
const { getAddInfo } = require('../controller/addInfo');
const { getNextClue } = require('../controller/clues');
const { createPayment } = require('../controller/payment');

router.post('/registerUser', registerUser);
router.post('/loginUser', loginUser);

router.get('/getTours', getTours);
router.post('/getIndividualTour', getIndividualTour);

router.post('/newBooking', createNewBooking);
router.get('/getBooking', getBooking);

router.post('/joinGame', joinGame);

router.post('/addInfo', getAddInfo);
router.post('/getNextClue', getNextClue);

router.post('/create-payment-intent', createPayment);

module.exports = { router };
