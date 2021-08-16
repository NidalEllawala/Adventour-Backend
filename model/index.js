require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_OWNER,
  process.env.DB_PASSWORD,

  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

const User = require('./user')(sequelize, DataTypes);
const Tour = require('./tour')(sequelize, DataTypes);
const Booking = require('./booking')(sequelize, DataTypes);
const Player = require('./player')(sequelize, DataTypes);

User.hasMany(Booking);
Booking.belongsTo(User);

Tour.hasMany(Booking);
Booking.belongsTo(Tour);

User.hasMany(Player);
Player.belongsTo(User);

Booking.hasMany(Player);
Player.belongsTo(Booking);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = { User, Tour, Booking, Player, sequelize };
