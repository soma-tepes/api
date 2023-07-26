const User = require('./../models/user.model');

const catchAsync = require('.././utils/catchAsync');

exports.findAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll({
    where: {
      status: 'active',
    },
  });

  res.status(200).json({
    status: 'success',
    users,
  });
});

exports.findOneUser = catchAsync(async (req, res, next) => {
  const { user } = req;

  res.status(200).json({
    status: 'success',
    user,
  });
});

exports.updateUser = async (req, res) => {
  try {
    const { user } = req;
    const { name, description } = req.body;

    await user.update({ name, description });

    res.status(200).json({
      status: 'success',
      message: 'User updated successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong',
      error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { user } = req;

    await user.update({ status: 'inactive' });

    return res.status(200).json({
      status: 'success',
      message: 'User deleted successfully',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong',
      error,
    });
  }
};
