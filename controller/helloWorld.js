const getHelloWorld = async (req, res) => {
  console.log('we ve made it');
  try {
    res.status(200).send('hello world');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getHelloWorld };
