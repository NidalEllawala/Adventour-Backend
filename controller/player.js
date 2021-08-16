const { Player, Booking } = require('../model/index');

const joinGame = async (req, res) => {
  const { bookingId, userId } = req.body;
  console.log('Join Game');
  try {
    const booking = await Booking.findOne({ where: { id: bookingId } });
    const playerInGame = await Player.findOne({
      where: { BookingId: bookingId, UserId: userId }
    });
    if (playerInGame) {
      res.status(201).send('You have already joined');
    } else if (playerInGame === null && booking.joined < booking.partySize) {
      await Player.create({
        BookingId: bookingId,
        UserId: userId
      });
      booking.joined += 1;
      await booking.save();
      console.log(booking);
      res.status(201).send('Player joined');
    } else {
      res.status(401).send('Game already full. Please try a diferent game!');
    }
  } catch (error) {
    console.log(error);
    res.send('Invalid bookingId');
  }
};

module.exports = { joinGame };
