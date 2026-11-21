const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
  addToCart,
  getCart,
  getFamilyCart,
  updateCart,
  removeFromCart,
} = require("../controller/cartController");

// Add Product to Cart (requires login)
router.post("/add", authMiddleware, addToCart);

// Family Cart (requires login)
router.get("/family/:familyId", authMiddleware, getFamilyCart);

// Personal Cart (requires login)
router.get("/:userId", authMiddleware, getCart);

// Update Cart Quantity (requires login)
router.put("/update", authMiddleware, updateCart);

// Remove Product From Cart (requires login)
router.delete("/remove", authMiddleware, removeFromCart);

module.exports = router;