const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: Number,
    category: String,
    brand: String,
    name: String,
    image: String,

    new_price: Number,
    old_price: Number,
    discount: String,

    rating: Number,
    reviews: Number,
    sizes: [String],
    color: [String],
    stock: String,
    delivery: String,
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);