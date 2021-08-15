
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define('Booking', {
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
});
return booking;
}

// // (async () => {
// //   try {
// //     const mockBooking = await Booking.create({
// //       // host: 1,
// //       password: 'join my game',
// //       partySize: 4,
// //       date: '2021-08-15T14:06:43.150Z',
// //       open: true,
// //       chapter: 1,
// //       price: 30
// //       // tourId: 1
// //     });
// //   } catch (error) {
// //     console.log(error);
// //   }
// // })();

// module.exports = { Booking };
