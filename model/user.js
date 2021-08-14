const { sequelize, DataTypes } = require('./index');
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  DOB: {
    type: DataTypes.DATEONLY
  }
});

User.sync({ force: true });

module.exports = { User };
