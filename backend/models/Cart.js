const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    // Personal Cart Owner
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    // Shared Family Cart
    family: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Family",
      default: null,
    },

    // Product
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    // Quantity
    quantity: {
      type: Number,
      required: true,
      default: 1,
      min: 1,
    },

    // Member who added the product
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    // Personal or Family Cart
    cartType: {
      type: String,
      enum: ["Personal", "Family"],
      default: "Personal",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", cartSchema);