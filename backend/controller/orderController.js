const Order = require("../models/Order");

// Place Order
const placeOrder = async (req, res) => {
  try {
    const { user, products, totalPrice } = req.body;

    if (!user || !products || products.length === 0 || !totalPrice) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const order = await Order.create(req.body);

    const populatedOrder = await Order.findById(order._id)
      .populate("user", "name email")
      .populate("products.product", "name image price")
      .populate("products.addedBy", "name");

    res.status(201).json({
      success: true,
      message: "Order Placed Successfully",
      order: populatedOrder,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Orders (Admin)
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .populate("products.product", "name image price")
      .populate("products.addedBy", "name");

    res.status(200).json({
      success: true,
      orders,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Logged-in User Orders
const getOrders = async (req, res) => {
  try {
    const userId = req.user?._id || req.user?.id || req.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const orders = await Order.find({ user: userId })
      .sort({ createdAt: -1 })
      .populate("user", "name email")
      .populate("products.product", "name image price")
      .populate("products.addedBy", "name");

    res.status(200).json({
      success: true,
      orders,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Orders For a Family
const getFamilyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ family: req.params.familyId })
      .sort({ createdAt: -1 })
      .populate("user", "name email")
      .populate("products.product", "name image price")
      .populate("products.addedBy", "name");

    res.status(200).json(orders);

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Order
const getSingleOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user", "name email")
      .populate("products.product", "name image price")
      .populate("products.addedBy", "name");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order Not Found",
      });
    }

    res.status(200).json({
      success: true,
      order,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Order Status (Admin)
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    )
      .populate("user", "name email")
      .populate("products.product", "name image price")
      .populate("products.addedBy", "name");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Order Status Updated Successfully",
      order,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  placeOrder,
  getAllOrders,
  getOrders,
  getFamilyOrders,
  getSingleOrder,
  updateOrderStatus,
};