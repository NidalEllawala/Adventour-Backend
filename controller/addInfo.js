const { Weapon } = require('../model/index');
const { Character } = require('../model/index');

const getAddInfo = async (req, res) => {
  try {
    const addInfo = {};
    addInfo.weapons = await Weapon.findAll({
      where: { TourId: req.body.tourId }
    });
    addInfo.characters = await Character.findAll({
      where: { TourId: req.body.tourId }
    });

    res.status(200).json(addInfo);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAddInfo };