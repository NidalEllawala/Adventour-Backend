const router = require('express').Router();

const { registerUser, loginUser } = require('../controller/user');
const { getTours, getIndividualTour } = require('../controller/tour');
const { getBooking, createNewBooking, closeBooking } = require('../controller/booking');
const { joinGame } = require('../controller/player');
const { getAddInfo } = require('../controller/addInfo');
const { getNextClue } = require('../controller/clues');
const { createPayment } = require('../controller/payment');

router.post('/registerUser', registerUser);
router.post('/loginUser', loginUser);

router.get('/getTours', getTours);
router.get('/getIndividualTour/:title', getIndividualTour);

router.post('/newBooking', createNewBooking);
router.get('/getBooking', getBooking);
router.post('/closeBooking', closeBooking );

router.post('/joinGame', joinGame);

router.get('/addInfo/:tourId', getAddInfo);
router.get('/getNextClue', getNextClue);

router.post('/create-payment-intent', createPayment);

module.exports = { router };
