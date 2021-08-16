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

User.hasMany(Booking, {
  foreignKey: 'userId'
});
Booking.belongsTo(User);

Tour.hasMany(Booking, {
  foreignKey: 'tourId'
});
Booking.belongsTo(Tour);

User.hasMany(Player, {
  foreignKey: 'userId'
});
Player.belongsTo(User);

Booking.hasMany(Player, {
  foreignKey: 'userId'
});
Player.belongsTo(Booking);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({force: true});
    await Tour.create({
      title: 'Jack The Ripper',
      location: 'Central London',
      rating: 5,
      genre: 'history',
      briefDescription: 'Explore London while solving a famous murderer',
      distance: 3,
      price: 30,
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at lorem lobortis, efficitur diam eu, bibendum sem. Morbi vel imperdiet mi, in euismod arcu. Suspendisse quis laoreet eros. Sed blandit molestie dui sed scelerisque. Vivamus aliquam tincidunt diam sit amet maximus. Etiam nisi leo, ultrices quis vulputate ut, accumsan ut velit. Duis non faucibus lectus, nec maximus velit. Maecenas felis orci, finibus ac enim ut, faucibus gravida leo. Curabitur finibus felis non ipsum lobortis, in tempor diam volutpat.',
      images: 'https://static.dw.com/image/17907040_6.jpg'
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = { User, Tour, Booking, Player };