module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define('Booking', {
    password: {
      type: DataTypes.INTEGER
    },
    partySize: {
      type: DataTypes.INTEGER
    },
    joined: {
      type: DataTypes.INTEGER
    },
    open: {
      type: DataTypes.BOOLEAN
    },
  });
  return booking;
};



