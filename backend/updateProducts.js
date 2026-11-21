/**
 * updateProducts.js
 * -------------------------------------------------------
 * Purpose: data folder ke sabhi category files (mens, womens,
 * kids, furniture, electronic, beauty) se data leke MongoDB
 * me existing products ko update karta hai.
 *
 * - Duplicate products create nahi honge (upsert use hota hai)
 * - Match "id" field ke basis par hota hai
 * - MongoDB connection properly open/close hota hai
 * -------------------------------------------------------
 */

const mongoose = require("mongoose");
require("dotenv").config();

// -------------------------------------------------------
// 1) Sabhi category data files import karein
//    (Agar koi file naam alag hai to yahan check kar lein)
// -------------------------------------------------------
const beautyProducts = require("./data/beautyproduct.js");
const mensProducts = require("./data/mens.js");
const womensProducts = require("./data/womens.js");
const kidsProducts = require("./data/kidsproduct.js");
const furnitureProducts = require("./data/furnitureproduct.js");
const electronicProducts = require("./data/electronicproduct.js");
const electronicDeals = require("./data/electronicDeals.js");
// Agar "mostLovedProducts.js" bhi products data rakhti hai to uncomment karein:
// const mostLovedProducts = require("./data/mostLovedProducts.js");

// -------------------------------------------------------
// 2) Sabko ek array me combine karein
//    NOTE: Har file me export ka naam different ho sakta hai
//    (jaise const mens = [...] to module.exports = mens)
//    Isliye humne generic naming use kiya hai upar.
// -------------------------------------------------------
const allProducts = [
  ...beautyProducts,
  ...mensProducts,
  ...womensProducts,
  ...kidsProducts,
  ...furnitureProducts,
  ...electronicProducts,
  ...electronicDeals,
  // ...mostLovedProducts,
];

// -------------------------------------------------------
// 3) Apna existing Product model import karein
// -------------------------------------------------------
const Product = require("./models/Product");

// -------------------------------------------------------
// 4) MongoDB connection string
// -------------------------------------------------------
const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  console.error("❌ MONGO_URI .env file me nahi mila. Please .env file check karein.");
  process.exit(1);
}

// -------------------------------------------------------
// Match field — "id" ke basis par decide karenge ki
// product already exist karta hai ya naya hai.
// -------------------------------------------------------
const MATCH_FIELD = "id";

async function updateProducts() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB se connection successful.");

    if (!Array.isArray(allProducts) || allProducts.length === 0) {
      console.log("⚠️ Data files me koi product data nahi mila. Kuch update nahi hua.");
      return;
    }

    let updatedCount = 0;
    let insertedCount = 0;
    let unchangedCount = 0;

    for (const product of allProducts) {
      const filter = { [MATCH_FIELD]: product[MATCH_FIELD] };

      const result = await Product.updateOne(
        filter,
        { $set: product },
        { upsert: true }
      );

      if (result.upsertedCount && result.upsertedCount > 0) {
        insertedCount++;
      } else if (result.modifiedCount && result.modifiedCount > 0) {
        updatedCount++;
      } else {
        unchangedCount++;
      }
    }

    console.log("✅ Products update complete!");
    console.log(`   → Updated: ${updatedCount}`);
    console.log(`   → Newly inserted: ${insertedCount}`);
    console.log(`   → Unchanged: ${unchangedCount}`);
    console.log(`   → Total processed: ${allProducts.length}`);
  } catch (error) {
    console.error("❌ Products update karte waqt error aaya:");
    console.error(error);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 MongoDB connection band kar diya gaya.");
  }
}

updateProducts();