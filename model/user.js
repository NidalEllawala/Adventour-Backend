const { sequelize, DataTypes } = require('./index');
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [5, 20]
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  DOB: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
});

User.sync({ force: true });

module.exports = { User };
