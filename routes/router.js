const router = require('express').Router();

const { registerUser, loginUser } = require('../controller/user');
const { getTours, getIndividualTour } = require('../controller/tour');
const { getBooking, createNewBooking } = require('../controller/booking');
const { joinGame } = require('../controller/player');
const { getAddInfo } = require('../controller/addInfo');
const { getNextClue } = require('../controller/clues');

router.post('/registerUser', registerUser);
router.post('/loginUser', loginUser);

router.get('/getTours', getTours);
router.post('/getIndividualTour', getIndividualTour);

router.post('/newBooking', createNewBooking);
router.get('/getBooking', getBooking);

router.post('/joinGame', joinGame);

router.get('/addInfo', getAddInfo);
router.get('/getNextClue', getNextClue);

module.exports = { router };
