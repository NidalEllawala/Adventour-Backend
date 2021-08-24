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
      chapter: 1 //this can probably be removed
    });
    res.status(201).json(newBooking);
  } catch (error) {
    console.log(error);
    res.status(401).send('Bookings for this tour are currently full');
  }
};

const closeBooking = async (req, res) => {
  try {
    const booking = await Booking.findOne({where: {id: req.body.bookingId}});
    booking.open = false;
    res.status(200).json({response: 'Booking closed'})
  } catch (error) {
    console.log(error);
    res.send(500).json({response: 'Internal server error'})
  }
}

module.exports = { getBooking, createNewBooking, closeBooking };
