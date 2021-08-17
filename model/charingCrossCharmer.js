module.exports = (sequelize, DataTypes) => {
  const tour = sequelize.define('CharingCrossCharmer', {
    clue: {
      type: DataTypes.TEXT
    },
    charImage: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    direction: {
      type: DataTypes.STRING
    },
    hint: {
      type: DataTypes.STRING
    },
    answer: {
      type: DataTypes.STRING
    }
  });
  return tour;
};
