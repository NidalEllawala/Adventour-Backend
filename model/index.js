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

User.hasMany(Booking, {
  foreignKey: 'userId'
});
Booking.belongsTo(User);

Tour.hasMany(Booking, {
  foreignKey: 'tourId'
});
Booking.belongsTo(Tour);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({force: true});
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

//module.exports = { sequelize, DataTypes };