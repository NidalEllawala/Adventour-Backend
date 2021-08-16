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
    const { password, TourId, UserId, partySize, date } = req.body;
    await Booking.create({
      password,
      TourId,
      UserId,
      date,
      partySize,
      joined: 0,
      open: true,
      chapter: 1
    });
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(401).send('Bookings for this tour are currently full');
  }
};

module.exports = { getBooking, createNewBooking };
