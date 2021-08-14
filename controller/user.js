const { User } = require('../model/user');

const registerUser = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const DOB = req.body.DOB;
    const newUser = await User.create({
      username: username,
      password: password,
      email: email,
      DOB: DOB
    });
    console.log('here is the user: ', newUser);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registerUser };
