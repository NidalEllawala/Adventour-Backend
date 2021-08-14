const { Tour } = require('../model/tour');

const getTours = async (req, res) => {
  try {
    const allTours = await Tour.findAll({
      attributes: [
        'id',
        'title',
        'location',
        'rating',
        'genre',
        'briefDescription'
      ]
    });
    res.status(200).json(allTours);
  } catch (error) {
    console.log(error);
  }
};

const getIndividualTour = async (req, res) => {
  try {
    const indTour = await Tour.findOne({ where: { title: req.body.title } });
    res.status(200).json(indTour);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTours, getIndividualTour };
