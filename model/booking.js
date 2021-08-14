const { sequelize, DataTypes } = require('./index');
const { Tour } = require('./tour');
const { User } = require('./user');

const Booking = sequelize.define('Booking', {
  password: {
    type: DataTypes.STRING
  },
  partySize: {
    type: DataTypes.INTEGER
  },
  date: {
    type: DataTypes.DATE
  },
  open: {
    type: DataTypes.BOOLEAN
  },
  chapter: {
    type: DataTypes.INTEGER
  }
  // tour: {
  //   type: DataTypes.STRING
  // },
  // host: {
  //   type: DataTypes.STRING
  // }
});

// User.hasMany(Booking, {
//   as: 'host'
// });
// Tour.hasMany(Booking, {
//   as: 'tourId'
// });

const mockBookingFunc = async () => {
  try {
    const mockBooking = await Booking.create({
      // host: 1,
      password: 'join my game',
      partySize: 4,
      date: '2021-08-15T14:06:43.150Z',
      open: true,
      chapter: 1,
      price: 30
      // tourId: 1
    });
    await mockBooking.save();
  } catch (error) {
    console.log(error);
  }
};
mockBookingFunc();
Booking.sync({ force: true });

module.exports = { Booking };
