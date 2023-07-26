const catchAsync = require('../utils/catchAsync');
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

const generateJWT = require('../utils/jwt');

exports.signUP = catchAsync(async (req, res) => {
  const { name, email, password, description } = req.body;

  const salt = await bcrypt.genSalt(12);
  const encryptedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name: name.toLowerCase().trim(),
    email: email.toLowerCase().trim(),
    password: encryptedPassword,
    description,
  });

  const token = await generateJWT(user.id);

  res.status(200).json({
    message: 'the user',
    token,
    user,
    status: 'sucess',
    encryptedPassword,
  });
});

exports.signIn = catchAsync(async (req, res) => {
  res.status(200).json({
    status: 'sucess',
  });
});
