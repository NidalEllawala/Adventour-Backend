const { CharingCrossCharmer } = require('../model/index');
//alter controoler to search table based on tour name

const getNextClue = async (req, res) => {
  try {
    const nextClue = await CharingCrossCharmer.findOne({
      where: { id: req.body.clueNumber }
    });
    console.log(nextClue);
    res.status(200).json(nextClue);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getNextClue };
