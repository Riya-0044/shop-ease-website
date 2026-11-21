const Cart = require("../models/Cart");

// Add To Cart (Personal + Family)
const addToCart = async (req, res) => {
  try {
    const { user, family, product, quantity, cartType = "Personal" } = req.body;

    if (!product || !quantity) {
      return res.status(400).json({
        success: false,
        message: "Product and Quantity are required",
      });
    }

    let filter = {};

    if (cartType === "Family") {
      if (!family) {
        return res.status(400).json({
          success: false,
          message: "Family ID is required",
        });
      }

      filter = {
        family,
        product,
        cartType: "Family",
      };
    } else {
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "User ID is required",
        });
      }

      filter = {
        user,
        product,
        cartType: "Personal",
      };
    }

    let cartItem = await Cart.findOne(filter);

    if (cartItem) {
      cartItem.quantity += Number(quantity);
      await cartItem.save();
    } else {
      cartItem = await Cart.create({
        user,
        family,
        product,
        quantity: Number(quantity),
        addedBy: user,
        cartType,
      });
    }

    cartItem = await Cart.findById(cartItem._id)
      .populate("product")
      .populate("addedBy", "name email");

    res.status(201).json({
      success: true,
      message: "Product Added To Cart",
      cartItem,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Personal Cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.find({
      user: req.params.userId,
      cartType: "Personal",
    })
      .populate("product")
      .populate("addedBy", "name email");

    res.status(200).json({
      success: true,
      cart,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Family Cart
const getFamilyCart = async (req, res) => {
  try {
    const cart = await Cart.find({
      family: req.params.familyId,
      cartType: "Family",
    })
      .populate("product")
      .populate("addedBy", "name email");

    res.status(200).json({
      success: true,
      cart,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Cart Quantity
const updateCart = async (req, res) => {
  try {
    const { cartId, quantity } = req.body;

    const cartItem = await Cart.findByIdAndUpdate(
      cartId,
      { quantity: Number(quantity) },
      { new: true }
    )
      .populate("product")
      .populate("addedBy", "name email");

    if (!cartItem) {
      return res.status(404).json({
        success: false,
        message: "Cart Item Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Cart Updated Successfully",
      cartItem,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Remove From Cart
const removeFromCart = async (req, res) => {
  try {
    const { cartId } = req.body;

    const cartItem = await Cart.findByIdAndDelete(cartId);

    if (!cartItem) {
      return res.status(404).json({
        success: false,
        message: "Cart Item Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product Removed From Cart",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addToCart,
  getCart,
  getFamilyCart,
  updateCart,
  removeFromCart,
};