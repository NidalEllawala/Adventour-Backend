const { CharingCrossCharmer } = require('../model/index');
//alter controoler to search table based on tour name

const getNextClue = async (req, res) => {
  try {
    const nextClue = await CharingCrossCharmer.findOne({
      where: { id: req.body.clueNumber }
    });
    res.status(200).json(nextClue);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: '006',
      message: 'Unable to get next clue',
      detail: 'Internal server error'
    })
  }
};


module.exports = { getNextClue };
