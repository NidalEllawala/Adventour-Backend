const { User } = require('../model/index');

const bcrypt = require('bcrypt');
const user = require('../model/user');

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
    res.status(201).json({
      username: newUser.username,
      userId: newUser.id
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: '001',
      message: 'Failed to register new user',
      detail: 'Ensure username or email is unique and password field is filled' 
    });
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
      res.status(401).json({
        error: '002',
        message: 'Invalid login credentials',
        detail: 'Authentication failed due to incorrect username or password'
      });
    } else {
      const validPassword = await bcrypt.compare(password, user.password);

      if (validPassword) {
        res.status(200).json({
          username: user.username,
          userId: user.id
        });
      } else {
        res.status(401).json({
          error: '002',
          message: 'Invalid login credentials',
          detail: 'Authentication failed due to incorrect username or password'
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: '003',
      message: 'Login failed due to server error',
      detail: 'Server was ubnbale to retrieve user details from database'
    });
  }
};

module.exports = { registerUser, loginUser };
