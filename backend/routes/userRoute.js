
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
  registerUser,
  loginUser,
  getAllUsers,
  getMe,
} = require("../controller/userController");

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Get Currently Logged-in User (used to restore/verify session)
router.get("/me", authMiddleware, getMe);

// Get All Users (Admin Dashboard)
router.get("/", getAllUsers);

module.exports = router;