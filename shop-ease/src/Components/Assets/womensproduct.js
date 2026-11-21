import saree from "./saree.webp";
import saree_1 from "./saree_1.webp";
import saree_2 from "./saree_2.webp";
import saree_3 from "./saree_3.webp";
import kurti1 from "./kurti1.webp";
import kurti2 from "./kurti2.webp";
import kurti3 from "./kurti3.webp";
import kurti4 from "./kurti4.webp";
import jeans8 from "./jeans8.webp";
import jeans9 from "./jeans9.webp";
import jeans10 from "./jeans10.webp";
import jeans11 from "./jeans11.webp";
import shoes8 from "./shoes8.webp";
import shoes9 from "./shoes9.webp";
import shoes10 from "./shoes10.webp";
import shoes11 from "./shoes11.webp";
import bag8 from "./bag8.webp";
import bag9 from "./bag9.webp";
import bag10 from "./bag10.webp";
import bag11 from "./bag11.webp";
import watches8 from "./watches8.webp";
import watches9 from "./watches9.webp";
import watches10 from "./watches10.webp";
import watches11 from "./watches11.webp";
const sarees = [
  {
    id: 301,
    category: "Sarees",
    brand: "Biba",
    name: "Women's Premium Silk Saree",
    image: saree,
    new_price: 1499,
    old_price: 1999,
    discount: "25% Off",
    rating: 4.8,
    review: 342,
    size: ["Free Size"],
    color: "Red",
    stock: "In Stock",
    deliver: "Free Delivery by Tomorrow",
    description:
      "Premium silk saree with elegant zari border. Soft, lightweight and perfect for weddings, festivals and special occasions.",
  },

  {
    id: 302,
    category: "Sarees",
    brand: "Libas",
    name: "Women's Cotton Printed Saree",
    image: saree_1,
    new_price: 1199,
    old_price: 1699,
    discount: "29% Off",
    rating: 4.6,
    review: 286,
    size: ["Free Size"],
    color: "Blue",
    stock: "In Stock",
    deliver: "Free Delivery in 2 Days",
    description:
      "Comfortable cotton printed saree with soft fabric, ideal for office wear, casual outings and festive occasions.",
  },

  {
    id: 303,
    category: "Sarees",
    brand: "Satrani",
    name: "Women's Designer Georgette Saree",
    image: saree_2,
    new_price: 1799,
    old_price: 2499,
    discount: "28% Off",
    rating: 4.7,
    review: 418,
    size: ["Free Size"],
    color: "Black",
    stock: "In Stock",
    deliver: "Free Delivery by Tomorrow",
    description:
      "Elegant georgette saree with embroidered border and premium finish, suitable for parties and family functions.",
  },

  {
    id: 304,
    category: "Sarees",
    brand: "Kalini",
    name: "Women's Party Wear Saree",
    image: saree_3,
    new_price: 2199,
    old_price: 2999,
    discount: "27% Off",
    rating: 4.9,
    review: 521,
    size: ["Free Size"],
    color: "Purple",
    stock: "Only 8 Left",
    deliver: "Free Delivery by Tomorrow",
    description:
      "Premium party wear saree featuring rich embroidery and luxurious fabric, perfect for weddings and festive celebrations.",
  },

  {
  id: 305,
  category: "Kurtis",
  brand: "Libas",
  name: "Women's Printed Kurti",
  image: kurti1,
  new_price: 899,
  old_price: 1499,
  discount: "40% OFF",
  rating: 4.6,
  review: 214,
  size: ["S", "M", "L", "XL"],
  color: "Maroon",
  stock: "In Stock",
  deliver: "Free Delivery by Tomorrow",
  description:
    "Soft rayon printed kurti for office wear, casual outings and everyday comfort.",
},

{
  id: 306,
  category: "Kurtis",
  brand: "BIBA",
  name: "Women's Embroidered Kurti",
  image: kurti2,
  new_price: 1199,
  old_price: 1899,
  discount: "37% OFF",
  rating: 4.7,
  review: 328,
  size: ["S", "M", "L", "XL"],
  color: "Blue",
  stock: "In Stock",
  deliver: "Free Delivery by Tomorrow",
  description:
    "Elegant embroidered kurti crafted with premium fabric for festive occasions.",
},

{
  id: 307,
  category: "Kurtis",
  brand: "Anouk",
  name: "Women's Straight Kurti",
  image: kurti3,
  new_price: 999,
  old_price: 1699,
  discount: "41% OFF",
  rating: 4.5,
  review: 182,
  size: ["S", "M", "L", "XL"],
  color: "Green",
  stock: "Only 7 Left",
  deliver: "Free Delivery in 2 Days",
  description:
    "Comfortable straight-fit cotton kurti with modern prints and elegant styling.",
},

{
  id: 308,
  category: "Kurtis",
  brand: "W",
  name: "Women's A-Line Kurti",
  image: kurti4,
  new_price: 1399,
  old_price: 2199,
  discount: "36% OFF",
  rating: 4.8,
  review: 396,
  size: ["S", "M", "L", "XL"],
  color: "Mustard",
  stock: "In Stock",
  deliver: "Free Delivery by Tomorrow",
  description:
    "Premium A-line kurti with stylish design, suitable for office, parties and festive wear.",
},

{
  id: 309,
  category: "Jeans",
  brand: "Levi's",
  name: "Women's Skinny Fit Jeans",
  image: jeans8,
  new_price: 1499,
  old_price: 2299,
  discount: "35% OFF",
  rating: 4.7,
  review: 462,
  size: ["28", "30", "32", "34"],
  color: "Blue",
  stock: "In Stock",
  deliver: "Free Delivery by Tomorrow",
  description:
    "Premium stretchable skinny fit jeans with a modern design for all-day comfort.",
},

{
  id: 310,
  category: "Jeans",
  brand: "Pepe Jeans",
  name: "Women's Straight Fit Jeans",
  image: jeans9,
  new_price: 1699,
  old_price: 2499,
  discount: "32% OFF",
  rating: 4.6,
  review: 378,
  size: ["28", "30", "32", "34"],
  color: "Dark Blue",
  stock: "In Stock",
  deliver: "Free Delivery by Tomorrow",
  description:
    "Classic straight-fit denim jeans made with soft and durable premium fabric.",
},

{
  id: 311,
  category: "Jeans",
  brand: "Lee",
  name: "Women's Wide Leg Jeans",
  image: jeans10,
  new_price: 1799,
  old_price: 2699,
  discount: "33% OFF",
  rating: 4.8,
  review: 295,
  size: ["28", "30", "32", "34"],
  color: "Black",
  stock: "Only 6 Left",
  deliver: "Free Delivery in 2 Days",
  description:
    "Stylish wide-leg jeans with a relaxed fit and premium comfort.",
},

{
  id: 312,
  category: "Jeans",
  brand: "ONLY",
  name: "Women's High Waist Jeans",
  image: jeans11,
  new_price: 1899,
  old_price: 2799,
  discount: "32% OFF",
  rating: 4.9,
  review: 541,
  size: ["28", "30", "32", "34"],
  color: "Light Blue",
  stock: "In Stock",
  deliver: "Free Delivery by Tomorrow",
  description:
    "Premium high-waist stretch denim jeans, ideal for casual and everyday wear.",
},

{
  id: 313,
  category: "Shoes",
  brand: "Nike",
  name: "Women's Running Shoes",
  image: shoes8,
  new_price: 2299,
  old_price: 3499,
  discount: "34% OFF",
  rating: 4.8,
  review: 521,
  size: ["5", "6", "7", "8", "9"],
  color: "White",
  stock: "In Stock",
  deliver: "Free Delivery by Tomorrow",
  description:
    "Lightweight running shoes with breathable mesh upper and cushioned sole for all-day comfort.",
},

{
  id: 314,
  category: "Shoes",
  brand: "Adidas",
  name: "Women's Casual Sneakers",
  image: shoes9,
  new_price: 2499,
  old_price: 3799,
  discount: "34% OFF",
  rating: 4.7,
  review: 438,
  size: ["5", "6", "7", "8", "9"],
  color: "Pink",
  stock: "In Stock",
  deliver: "Free Delivery by Tomorrow",
  description:
    "Premium casual sneakers with soft cushioning and stylish everyday design.",
},

{
  id: 315,
  category: "Shoes",
  brand: "Puma",
  name: "Women's Sports Shoes",
  image: shoes10,
  new_price: 1999,
  old_price: 2999,
  discount: "33% OFF",
  rating: 4.6,
  review: 312,
  size: ["5", "6", "7", "8", "9"],
  color: "Black",
  stock: "Only 9 Left",
  deliver: "Free Delivery in 2 Days",
  description:
    "Comfortable sports shoes designed for walking, gym workouts and daily activities.",
},

{
  id: 316,
  category: "Shoes",
  brand: "Skechers",
  name: "Women's Walking Shoes",
  image: shoes11,
  new_price: 2799,
  old_price: 4199,
  discount: "33% OFF",
  rating: 4.9,
  review: 607,
  size: ["5", "6", "7", "8", "9"],
  color: "Grey",
  stock: "In Stock",
  deliver: "Free Delivery by Tomorrow",
  description:
    "Premium walking shoes with memory foam cushioning for superior comfort and support.",
},

{
  id: 317,
  category: "Leather Bags",
  brand: "Lavie",
  name: "Women's Tote Leather Bag",
  image: bag8,
  new_price: 1799,
  old_price: 2699,
  discount: "33% OFF",
  rating: 4.8,
  review: 412,
  size: ["Standard"],
  color: "Brown",
  stock: "In Stock",
  deliver: "Free Delivery by Tomorrow",
  description:
    "Premium leather tote bag with spacious compartments, perfect for office, shopping and daily use.",
},

{
  id: 318,
  category: "Leather Bags",
  brand: "Caprese",
  name: "Women's Shoulder Bag",
  image: bag9,
  new_price: 1599,
  old_price: 2499,
  discount: "36% OFF",
  rating: 4.7,
  review: 368,
  size: ["Standard"],
  color: "Black",
  stock: "In Stock",
  deliver: "Free Delivery by Tomorrow",
  description:
    "Elegant shoulder bag crafted with premium leather finish and multiple storage pockets.",
},

{
  id: 319,
  category: "Leather Bags",
  brand: "Baggit",
  name: "Women's Sling Bag",
  image: bag10,
  new_price: 1399,
  old_price: 2199,
  discount: "36% OFF",
  rating: 4.6,
  review: 284,
  size: ["Standard"],
  color: "Beige",
  stock: "Only 5 Left",
  deliver: "Free Delivery in 2 Days",
  description:
    "Compact sling bag with adjustable strap, ideal for travel, shopping and casual outings.",
},

{
  id: 320,
  category: "Leather Bags",
  brand: "Allen Solly",
  name: "Women's Handbag",
  image: bag11,
  new_price: 2299,
  old_price: 3399,
  discount: "32% OFF",
  rating: 4.9,
  review: 523,
  size: ["Standard"],
  color: "Tan",
  stock: "In Stock",
  deliver: "Free Delivery by Tomorrow",
  description:
    "Stylish premium handbag with elegant design, durable leather finish and spacious interior.",
},

{
  id: 321,
  category: "Watches",
  brand: "Titan",
  name: "Women's Analog Watch",
  image: watches8,
  new_price: 2499,
  old_price: 3999,
  discount: "38% OFF",
  rating: 4.8,
  review: 486,
  size: ["Standard"],
  color: "Rose Gold",
  stock: "In Stock",
  deliver: "Free Delivery by Tomorrow",
  description:
    "Elegant analog watch with premium stainless steel strap, perfect for office, parties and daily wear.",
},

{
  id: 322,
  category: "Watches",
  brand: "Fastrack",
  name: "Women's Stylish Watch",
  image: watches9,
  new_price: 1899,
  old_price: 2999,
  discount: "37% OFF",
  rating: 4.7,
  review: 372,
  size: ["Standard"],
  color: "Black",
  stock: "In Stock",
  deliver: "Free Delivery by Tomorrow",
  description:
    "Stylish women's wristwatch featuring a sleek dial and comfortable strap for everyday use.",
},

{
  id: 323,
  category: "Watches",
  brand: "Sonata",
  name: "Women's Classic Watch",
  image: watches10,
  new_price: 1699,
  old_price: 2699,
  discount: "37% OFF",
  rating: 4.6,
  review: 295,
  size: ["Standard"],
  color: "Silver",
  stock: "Only 8 Left",
  deliver: "Free Delivery in 2 Days",
  description:
    "Classic analog watch with elegant silver finish, suitable for both casual and formal occasions.",
},

{
  id: 324,
  category: "Watches",
  brand: "Casio",
  name: "Women's Premium Watch",
  image: watches11,
  new_price: 2999,
  old_price: 4499,
  discount: "33% OFF",
  rating: 4.9,
  review: 614,
  size: ["Standard"],
  color: "Gold",
  stock: "In Stock",
  deliver: "Free Delivery by Tomorrow",
  description:
    "Premium women's watch with luxurious gold finish, durable build and elegant design for every occasion.",
},
];

export default sarees;