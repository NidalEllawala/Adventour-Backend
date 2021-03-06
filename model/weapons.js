module.exports = (sequelize, DataTypes) => {
  const weapons = sequelize.define('Weapon', {
    name: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    number: {
      type: DataTypes.INTEGER
    }
  });
  return weapons;
};

