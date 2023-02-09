const express = require("express");
const {
  registerUser,
  loginrUser,
  getMe,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginrUser);
router.get("/me", protect, getMe);

module.exports = router;
