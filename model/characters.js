module.exports = (sequelize, DataTypes) => {
  const characters = sequelize.define('Character', {
    name: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    description: {
      type: DataTypes.STRING
    }
  });
  return characters;
};
