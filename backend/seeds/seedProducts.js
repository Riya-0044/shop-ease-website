require("dotenv").config();

const connectDB = require("../config/db");
const Product = require("../models/Product");

const mens = require("../data/mens");
const womens = require("../data/womens");
const kidsproduct = require("../data/kidsproduct");
const beautyproduct = require("../data/beautyproduct");
const furnitureproduct = require("../data/furnitureproduct");
const electronicproduct = require("../data/electronicproduct");
const mostLovedProducts = require("../data/mostLovedProducts");
const electronicDeals = require("../data/electronicDeals");

const importData = async () => {
  try {
    await connectDB();
    const allProducts = [
  ...mens,
  ...womens,
  ...kidsproduct,
  ...beautyproduct,
  ...furnitureproduct,
  ...electronicproduct,
  ...mostLovedProducts,
  ...electronicDeals,
].map((product) => ({
  ...product,
  image: `/${product.image}`,
}));

await Product.deleteMany();
await Product.insertMany(allProducts);

    

    console.log("All Products Imported Successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();