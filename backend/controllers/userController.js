// @desc    Sutenticate a user
// @route   POST /api/users/login
// @access  Public

const loginrUser = (req, res) => {
  res.json({ message: "loginr user" });
};

// @desc    Register new user
// @route   POST /api/users
// @access  Public

const registerUser = (req, res) => {
  res.json({ message: "register user" });
};

// @desc    Get User data
// @route   GET /api/users/me
// @access  Public

const getMe = (req, res) => {
  res.json({ message: "get user data" });
};

module.exports = { registerUser, loginrUser, getMe };
