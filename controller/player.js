const { Player, Booking } = require('../model/index');

const joinGame = async (req, res) => {
  const { password, userId } = req.body;
  console.log('Join Game');
  try {
    const booking = await Booking.findOne({ where: { password: password } });
    console.log(booking);
    const playerInGame = await Player.findOne({
      where: { BookingId: booking.id, UserId: userId }
    });
    if (playerInGame) {
      res.status(201).json({joined: true});
    } else if (playerInGame === null && booking.joined < booking.partySize) {
      await Player.create({
        BookingId: booking.id,
        UserId: userId
      });
      booking.joined += 1;
      await booking.save();
      console.log(booking);
      res.status(201).json({joined: true});
    } else {
      res.status(401).json({joined: false});
    }
  } catch (error) {
    console.log(error);
    res.status(403).json({joined: false});
  }
};

module.exports = { joinGame };
