import sofa1 from "./sofa1.webp";
import sofa2 from "./sofa2.webp";
import sofa3 from "./sofa3.webp";
import sofa4 from "./sofa4.webp";

import bed1 from "./bed1.webp";
import bed2 from "./bed2.webp";
import bed3 from "./bed3.webp";
import bed4 from "./bed4.webp";

import dining1 from "./dining1.webp";
import dining2 from "./dining2.webp";
import dining3 from "./dining3.webp";
import dining4 from "./dining4.webp";

import chair1 from "./chair1.webp";
import chair2 from "./chair2.webp";
import chair3 from "./chair3.webp";
import chair4 from "./chair4.webp";

import table1 from "./table1.webp";
import table2 from "./table2.webp";
import table3 from "./table3.webp";
import table4 from "./table4.webp";

import wardrobe1 from "./wardrobe1.webp";
import wardrobe2 from "./wardrobe2.webp";
import wardrobe3 from "./wardrobe3.webp";
import wardrobe4 from "./wardrobe4.webp";


const furnitureproduct = [
  {
    id: 801,
    category: "Sofas",
    brand: "HomeCraft",
    name: "Modern 3 Seater Fabric Sofa",
    image: sofa1,
    new_price: 24999,
    old_price: 31999,
    discount: "22% OFF",
    rating: 4.7,
    review: 186,
    color: "Grey",
    material: "Fabric",
    stock: "In Stock",
    deliver: "Free Delivery",
    description:
      "Comfortable 3-seater fabric sofa with premium cushioning and solid wooden frame."
  },
  {
    id: 802,
    category: "Sofas",
    brand: "Urban Living",
    name: "L Shape Corner Sofa",
    image: sofa2,
    new_price: 38999,
    old_price: 46999,
    discount: "17% OFF",
    rating: 4.8,
    review: 241,
    color: "Blue",
    material: "Velvet",
    stock: "In Stock",
    deliver: "Free Delivery",
    description:
      "Spacious L-shaped sofa designed for modern living rooms with soft velvet finish."
  },
  {
    id: 803,
    category: "Sofas",
    brand: "WoodNest",
    name: "Wooden Sofa Set",
    image: sofa3,
    new_price: 28999,
    old_price: 35999,
    discount: "19% OFF",
    rating: 4.6,
    review: 164,
    color: "Brown",
    material: "Sheesham Wood",
    stock: "Limited Stock",
    deliver: "Free Delivery",
    description:
      "Elegant Sheesham wood sofa set with premium cushions for long-lasting comfort."
  },
  {
    id: 804,
    category: "Sofas",
    brand: "Comfort Plus",
    name: "Luxury Recliner Sofa",
    image: sofa4,
    new_price: 44999,
    old_price: 54999,
    discount: "18% OFF",
    rating: 4.9,
    review: 328,
    color: "Black",
    material: "Leatherette",
    stock: "In Stock",
    deliver: "Free Delivery",
    description:
      "Premium recliner sofa with adjustable seating and luxurious leatherette finish."
  },

  {
    id: 805,
    category: "Beds",
    brand: "SleepWell",
    name: "Queen Size Wooden Bed",
    image: bed1,
    new_price: 22999,
    old_price: 28999,
    discount: "21% OFF",
    rating: 4.8,
    review: 214,
    color: "Walnut",
    material: "Engineered Wood",
    stock: "In Stock",
    deliver: "Free Delivery",
    description:
      "Queen size bed with a sturdy engineered wood frame and elegant walnut finish.",
  },
  {
    id: 806,
    category: "Beds",
    brand: "HomeCraft",
    name: "King Size Storage Bed",
    image: bed2,
    new_price: 31999,
    old_price: 39999,
    discount: "20% OFF",
    rating: 4.7,
    review: 176,
    color: "Teak",
    material: "Sheesham Wood",
    stock: "In Stock",
    deliver: "Free Delivery",
    description:
      "Spacious king size bed with built-in storage and premium Sheesham wood construction.",
  },
  {
    id: 807,
    category: "Beds",
    brand: "Urban Living",
    name: "Modern Upholstered Bed",
    image: bed3,
    new_price: 27999,
    old_price: 34999,
    discount: "20% OFF",
    rating: 4.6,
    review: 152,
    color: "Grey",
    material: "Fabric & Wood",
    stock: "Limited Stock",
    deliver: "Free Delivery",
    description:
      "Soft upholstered headboard with a contemporary design for a stylish bedroom.",
  },
  {
    id: 808,
    category: "Beds",
    brand: "WoodNest",
    name: "Single Bed with Storage",
    image: bed4,
    new_price: 16999,
    old_price: 21999,
    discount: "23% OFF",
    rating: 4.5,
    review: 129,
    color: "Brown",
    material: "Solid Wood",
    stock: "In Stock",
    deliver: "Free Delivery",
    description:
      "Compact single bed featuring under-bed storage and a durable solid wood frame.",
  },

  {
    id: 809,
    category: "Dining",
    brand: "HomeCraft",
    name: "4 Seater Wooden Dining Table",
    image: dining1,
    new_price: 18999,
    old_price: 23999,
    discount: "21% OFF",
    rating: 4.7,
    review: 168,
    color: "Brown",
    material: "Sheesham Wood",
    stock: "In Stock",
    deliver: "Free Delivery",
    description:
      "Elegant 4-seater dining table crafted from premium Sheesham wood for everyday family meals.",
  },
  {
    id: 810,
    category: "Dining",
    brand: "Urban Living",
    name: "6 Seater Dining Set",
    image: dining2,
    new_price: 32999,
    old_price: 39999,
    discount: "18% OFF",
    rating: 4.8,
    review: 245,
    color: "Walnut",
    material: "Solid Wood",
    stock: "In Stock",
    deliver: "Free Delivery",
    description:
      "Spacious 6-seater dining set with a modern finish, perfect for large families and gatherings.",
  },
  {
    id: 811,
    category: "Dining",
    brand: "WoodNest",
    name: "Round Dining Table",
    image: dining3,
    new_price: 21999,
    old_price: 26999,
    discount: "19% OFF",
    rating: 4.6,
    review: 137,
    color: "Natural Wood",
    material: "Engineered Wood",
    stock: "Limited Stock",
    deliver: "Free Delivery",
    description:
      "Stylish round dining table designed to maximize space while adding elegance to your dining room.",
  },
  {
    id: 812,
    category: "Dining",
    brand: "Comfort Plus",
    name: "Glass Top Dining Table",
    image: dining4,
    new_price: 28999,
    old_price: 34999,
    discount: "17% OFF",
    rating: 4.7,
    review: 194,
    color: "Black",
    material: "Tempered Glass & Steel",
    stock: "In Stock",
    deliver: "Free Delivery",
    description:
      "Modern glass-top dining table with a strong steel frame, offering a premium contemporary look.",
  },

  {
    id: 813,
    category: "Chairs",
    brand: "HomeCraft",
    name: "Ergonomic Office Chair",
    image: chair1,
    new_price: 7999,
    old_price: 9999,
    discount: "20% OFF",
    rating: 4.7,
    review: 286,
    color: "Black",
    material: "Mesh & Metal",
    stock: "In Stock",
    deliver: "Free Delivery",
    description:
      "Ergonomic office chair with adjustable height, lumbar support, and breathable mesh back.",
  },
  {
    id: 814,
    category: "Chairs",
    brand: "Urban Living",
    name: "Wooden Dining Chair",
    image: chair2,
    new_price: 4999,
    old_price: 6499,
    discount: "23% OFF",
    rating: 4.6,
    review: 174,
    color: "Brown",
    material: "Sheesham Wood",
    stock: "In Stock",
    deliver: "Free Delivery",
    description:
      "Elegant Sheesham wood dining chair with a comfortable cushioned seat and sturdy construction.",
  },
  {
    id: 815,
    category: "Chairs",
    brand: "Comfort Plus",
    name: "Accent Lounge Chair",
    image: chair3,
    new_price: 11999,
    old_price: 14999,
    discount: "20% OFF",
    rating: 4.8,
    review: 153,
    color: "Blue",
    material: "Velvet Fabric",
    stock: "Limited Stock",
    deliver: "Free Delivery",
    description:
      "Premium velvet accent chair with soft cushioning, ideal for living rooms and reading corners.",
  },
  {
    id: 816,
    category: "Chairs",
    brand: "WoodNest",
    name: "Rocking Chair",
    image: chair4,
    new_price: 9999,
    old_price: 12999,
    discount: "23% OFF",
    rating: 4.7,
    review: 142,
    color: "Natural Wood",
    material: "Solid Wood",
    stock: "In Stock",
    deliver: "Free Delivery",
    description:
      "Classic solid wood rocking chair designed for comfort, relaxation, and timeless style.",
  },

  {
    id: 817,
    category: "Coffee Tables",
    brand: "HomeCraft",
    name: "Modern Wooden Coffee Table",
    image: table1,
    new_price: 6999,
    old_price: 8999,
    discount: "22% OFF",
    rating: 4.7,
    review: 198,
    color: "Walnut",
    material: "Engineered Wood",
    stock: "In Stock",
    deliver: "Free Delivery",
    description:
      "Modern coffee table with spacious tabletop and lower storage shelf, perfect for living rooms.",
  },
  {
    id: 818,
    category: "Coffee Tables",
    brand: "Urban Living",
    name: "Round Glass Coffee Table",
    image: table2,
    new_price: 9999,
    old_price: 12499,
    discount: "20% OFF",
    rating: 4.8,
    review: 165,
    color: "Black",
    material: "Tempered Glass & Metal",
    stock: "In Stock",
    deliver: "Free Delivery",
    description:
      "Elegant round coffee table with a tempered glass top and sturdy metal frame.",
  },
  {
    id: 819,
    category: "Coffee Tables",
    brand: "WoodNest",
    name: "Nested Coffee Table Set",
    image: table3,
    new_price: 11999,
    old_price: 14999,
    discount: "20% OFF",
    rating: 4.6,
    review: 137,
    color: "Oak",
    material: "Solid Wood",
    stock: "Limited Stock",
    deliver: "Free Delivery",
    description:
      "Set of two nesting coffee tables that save space while adding a stylish touch to your home.",
  },
  {
    id: 820,
    category: "Coffee Tables",
    brand: "Comfort Plus",
    name: "Storage Coffee Table",
    image: table4,
    new_price: 8499,
    old_price: 10999,
    discount: "23% OFF",
    rating: 4.7,
    review: 176,
    color: "Brown",
    material: "Engineered Wood",
    stock: "In Stock",
    deliver: "Free Delivery",
    description:
      "Functional coffee table with hidden storage compartments to keep your living room organized.",
  },

  {
    id: 821,
    category: "Wardrobes",
    brand: "HomeCraft",
    name: "2 Door Wooden Wardrobe",
    image: wardrobe1,
    new_price: 18999,
    old_price: 23999,
    discount: "21% OFF",
    rating: 4.7,
    review: 192,
    color: "Walnut",
    material: "Engineered Wood",
    stock: "In Stock",
    deliver: "Free Delivery",
    description:
      "Spacious 2-door wardrobe with multiple shelves and a hanging section for organized storage.",
  },
  {
    id: 822,
    category: "Wardrobes",
    brand: "Urban Living",
    name: "3 Door Wardrobe with Mirror",
    image: wardrobe2,
    new_price: 29999,
    old_price: 36999,
    discount: "19% OFF",
    rating: 4.8,
    review: 247,
    color: "Brown",
    material: "Engineered Wood",
    stock: "In Stock",
    deliver: "Free Delivery",
    description:
      "Modern 3-door wardrobe featuring a full-length mirror, drawers, and ample storage space.",
  },
  {
    id: 823,
    category: "Wardrobes",
    brand: "WoodNest",
    name: "Sliding Door Wardrobe",
    image: wardrobe3,
    new_price: 35999,
    old_price: 43999,
    discount: "18% OFF",
    rating: 4.9,
    review: 184,
    color: "White",
    material: "Engineered Wood",
    stock: "Limited Stock",
    deliver: "Free Delivery",
    description:
      "Premium sliding-door wardrobe with spacious compartments and a sleek contemporary design.",
  },
  {
    id: 824,
    category: "Wardrobes",
    brand: "Comfort Plus",
    name: "4 Door Storage Wardrobe",
    image: wardrobe4,
    new_price: 42999,
    old_price: 51999,
    discount: "17% OFF",
    rating: 4.8,
    review: 215,
    color: "Teak",
    material: "Solid Wood",
    stock: "In Stock",
    deliver: "Free Delivery",
    description:
      "Large 4-door wardrobe with shelves, drawers, and hanging space, ideal for family storage needs.",
  },


];

export default furnitureproduct;