
module.exports = (sequelize, DataTypes) => {
  const tour = sequelize.define('Tour', {
  title: {
    type: DataTypes.STRING
  },
  location: {
    type: DataTypes.STRING
  },
  rating: {
    type: DataTypes.INTEGER,
    validate: {
      min: 0,
      max: 5
    }
  },
  genre: {
    type: DataTypes.STRING
  },
  briefDescription: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT
  },
  distance: {
    type: DataTypes.FLOAT
  },
  price: {
    type: DataTypes.FLOAT
  },
  images: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true
    }
  }
});
return tour;
}

