const { Player, Booking, Tour } = require('../model/index');


const joinGame = async (req, res) => {
  const { password, userId } = req.body;
  try {
    const booking = await Booking.findOne({ where: { password: password } });
    const tour = await Tour.findOne({where: {id : booking.TourId}})
    const playerInGame = await Player.findOne({
      where: { BookingId: booking.id, UserId: userId }
    });
    if (playerInGame) {
      res.status(201).json({
        joined: true,
        tour: tour.title,
        clues: tour.clues
      }); //player already in game
    } else if (playerInGame === null && booking.joined < booking.partySize && booking.open === true) {
      await Player.create({
        BookingId: booking.id,
        UserId: userId
      });
      booking.joined += 1;
      await booking.save();
      res.status(201).json({
        joined: true,
        tour: tour.title,
        clues: tour.clues
      }); //player joined
    } else {
      res.status(403).json({
        error: '005',
        message: 'Game full',
        detail: 'Number of players allowed for booking reached'
      }); //game full
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: '006',
      message: 'Unable to create new booking',
      detail: 'Internal server error'
    }); //invalid password
  }
};


module.exports = { joinGame };
