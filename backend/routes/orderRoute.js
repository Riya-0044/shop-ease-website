const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
  placeOrder,
  getAllOrders,
  getOrders,
  getFamilyOrders,
  getSingleOrder,
  updateOrderStatus,
} = require("../controller/orderController");

// Place Order (requires login)
router.post("/place", authMiddleware, placeOrder);

// Admin - Get All Orders (used by Admin Panel, kept public like before)
router.get("/", getAllOrders);

// Logged-in User's Own Orders (requires login)
router.get("/user", authMiddleware, getOrders);

// Orders For a Family (used by "View Orders" on Family Cart page)
router.get("/family/:familyId", getFamilyOrders);

// Single Order (requires login)
router.get("/single/:id", authMiddleware, getSingleOrder);

// Update Status (Admin Panel, kept public like before)
router.put("/update/:id", updateOrderStatus);

module.exports = router;