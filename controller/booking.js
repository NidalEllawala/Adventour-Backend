const { Booking } = require('../model/booking');

const getBooking = async (req, res) => {
  try {
    const booking = await Booking.findAll();
    res.status(200).json(booking);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getBooking };
