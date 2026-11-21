
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
  createFamily,
  joinFamily,
  getFamily,
  getAllFamilies, // Admin ke liye
  deleteFamily,   // Admin delete ke liye
  leaveFamily,
  getFamilyByUser,
} = require("../controller/familyController");

// Get All Families (Admin Panel ke liye - GET /api/family, kept public like before)
router.get("/", getAllFamilies);

// Create Family (requires login)
router.post("/create", authMiddleware, createFamily);

// Join Family (requires login)
router.post("/join", authMiddleware, joinFamily);

// Get Family by Logged-in User (requires login)
router.get("/by-user/:userId", authMiddleware, getFamilyByUser);

// Get Single Family Details by ID (requires login)
router.get("/:id", authMiddleware, getFamily);

// Leave Family (User side, requires login)
router.delete("/leave", authMiddleware, leaveFamily);

// Delete Family by ID (Admin side - DELETE /api/family/:id, kept public like before)
router.delete("/:id", deleteFamily);

module.exports = router;