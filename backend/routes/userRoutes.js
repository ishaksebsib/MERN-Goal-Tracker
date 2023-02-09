const express = require("express");
const {
  registerUser,
  loginrUser,
  getMe,
} = require("../controllers/userController");
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginrUser);
router.get("/me", getMe);

module.exports = router;
