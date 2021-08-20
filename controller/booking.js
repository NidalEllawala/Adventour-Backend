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
      chapter: 1
    });
    res.status(201).json(newBooking);
  } catch (error) {
    console.log(error);
    res.status(401).send('Bookings for this tour are currently full');
  }
};

module.exports = { getBooking, createNewBooking };
