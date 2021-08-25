const { Booking } = require('../model/index');

const getBooking = async (req, res) => {
  try {
    const booking = await Booking.findAll();
    res.status(200).json(booking);
  } catch (error) {
    console.log(error);
  }
};

const createNewBooking = async (req, res) => {
  try {
    const uid = Math.floor((Math.random()*1000));
    const { TourId, UserId, partySize } = req.body;
    const newBooking = await Booking.create({
      TourId,
      UserId,
      partySize,
      password: uid,
      joined: 0,
      open: true,
    });
    res.status(201).json(newBooking);
  } catch (error) {
    console.log(error);
    res.status(503).json({
      error: '004',
      message: 'Unable to create new booking',
      detail: 'Invalid booking details'
    });
  }
};

const closeBooking = async (req, res) => {
  try {
    const booking = await Booking.findOne({where: {id: req.body.bookingId}});
    booking.open = false;
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: '005',
      message: 'Unable to create new booking',
      detail: 'Internal server error'
    });
  }
}

module.exports = { getBooking, createNewBooking, closeBooking };
