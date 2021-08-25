const { Tour } = require('../model/index');

const getTours = async (req, res) => {
  try {

    const allTours = await Tour.findAll({
      attributes: [
        'id',
        'images',
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
    res.status(500).json({
      error: '006',
      message: 'Unable to get list of tours',
      detail: 'Internal server error'
    })
  }
};

const getIndividualTour = async (req, res) => {
  try {
    const indTour = await Tour.findOne({ where: { title: req.body.title } });
    res.status(200).json(indTour);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: '006',
      message: 'Unable to get individual tour',
      detail: 'Internal server error'
    })
  }
};

module.exports = { getTours, getIndividualTour };
