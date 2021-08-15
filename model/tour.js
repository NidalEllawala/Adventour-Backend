
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

// (async () => {
//   await Tour.sync({ force: true });
//   const mockTour = await Tour.create({
//         title: 'Jack The Ripper',
//         location: 'Central London',
//         rating: 5,
//         genre: 'history',
//         briefDescription: 'Explore London while solving a famous murderer',
//         distance: 3,
//         price: 30,
//         description:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at lorem lobortis, efficitur diam eu, bibendum sem. Morbi vel imperdiet mi, in euismod arcu. Suspendisse quis laoreet eros. Sed blandit molestie dui sed scelerisque. Vivamus aliquam tincidunt diam sit amet maximus. Etiam nisi leo, ultrices quis vulputate ut, accumsan ut velit. Duis non faucibus lectus, nec maximus velit. Maecenas felis orci, finibus ac enim ut, faucibus gravida leo. Curabitur finibus felis non ipsum lobortis, in tempor diam volutpat.',
//         images: 'https://static.dw.com/image/17907040_6.jpg'
//       });
// })();

// // (async () => {
// //   const mockTour = await Tour.create({
// //     title: 'Jack The Ripper',
// //     location: 'Central London',
// //     rating: 5,
// //     genre: 'history',
// //     briefDescription: 'Explore London while solving a famous murderer',
// //     distance: 3,
// //     price: 30,
// //     description:
// //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at lorem lobortis, efficitur diam eu, bibendum sem. Morbi vel imperdiet mi, in euismod arcu. Suspendisse quis laoreet eros. Sed blandit molestie dui sed scelerisque. Vivamus aliquam tincidunt diam sit amet maximus. Etiam nisi leo, ultrices quis vulputate ut, accumsan ut velit. Duis non faucibus lectus, nec maximus velit. Maecenas felis orci, finibus ac enim ut, faucibus gravida leo. Curabitur finibus felis non ipsum lobortis, in tempor diam volutpat.',
// //     images: 'https://static.dw.com/image/17907040_6.jpg'
// //   });
// // })();

// module.exports = { Tour };
