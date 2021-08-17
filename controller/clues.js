const { CharingCrossCharmer } = require('../model/index');

const getNextClue = async (req, res) => {
  try {
    const nextClue = await CharingCrossCharmer.findOne({
      where: { id: req.body.clueNumber }
    });
    res.status(200).json(nextClue);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getNextClue };
