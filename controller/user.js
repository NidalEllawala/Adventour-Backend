const { User } = require('../model/user');

const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  try {
    const { username, password, email, DOB } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      username,
      password: hashedPassword,
      email,
      DOB
    });
    console.log('here is the user: ', newUser);
    // newUser.save();
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    let user;
    if (username) {
      user = await User.findOne({ where: { username: username } });
    } else {
      user = await User.findOne({ where: { email: email } });
    }

    if (!user) {
      res.status(401).send('Invalid login credentials. Please try again!');
    } else {
      const validPassword = await bcrypt.compare(password, user.password);

      if (validPassword) {
        res.status(200).json(user);
      } else {
        res.status(401).send('Invalid login credentials. Please try again!');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registerUser, loginUser };
