
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

