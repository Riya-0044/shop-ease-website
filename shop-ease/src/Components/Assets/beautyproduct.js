import skincare1 from "./skincare1.webp";
import skincare2 from "./skincare2.webp";
import skincare3 from "./skincare3.webp";
import skincare4 from "./skincare4.webp";

import makeup1 from "./makeup1.webp";
import makeup2 from "./makeup2.webp";
import makeup3 from "./makeup3.webp";
import makeup4 from "./makeup4.webp";

import haircare1 from "./haircare1.webp";
import haircare2 from "./haircare2.webp";
import haircare3 from "./haircare3.webp";
import haircare4 from "./haircare4.webp";

import fragrance1 from "./fragrance1.webp";
import fragrance2 from "./fragrance2.webp";
import fragrance3 from "./fragrance3.webp";
import fragrance4 from "./fragrance4.webp";

import bathbody1 from "./bathbody1.webp";
import bathbody2 from "./bathbody2.webp";
import bathbody3 from "./bathbody3.webp";
import bathbody4 from "./bathbody4.webp";

import grooming1 from "./grooming1.webp";
import grooming2 from "./grooming2.webp";
import grooming3 from "./grooming3.webp";
import grooming4 from "./grooming4.webp";

const beautyproduct=[

{
  id: 1001,
  category: "Skincare",
  brand: "Cetaphil",
  name: "Gentle Skin Cleanser",
  image: skincare1,
  new_price: 599,
  old_price: 699,
  discount: "14% OFF",
  rating: 4.8,
  review: 486,
  stock: "In Stock",
  deliver: "Free Delivery",
  description:
    "Gentle daily facial cleanser suitable for all skin types, leaving skin soft and refreshed.",
},
{
  id: 1002,
  category: "Skincare",
  brand: "Minimalist",
  name: "10% Vitamin C Face Serum",
  image: skincare2,
  new_price: 699,
  old_price: 799,
  discount: "13% OFF",
  rating: 4.7,
  review: 392,
  stock: "In Stock",
  deliver: "Free Delivery",
  description:
    "Brightening Vitamin C serum that helps reduce dark spots and improves skin glow.",
},
{
  id: 1003,
  category: "Skincare",
  brand: "Neutrogena",
  name: "Hydro Boost Water Gel",
  image: skincare3,
  new_price: 899,
  old_price: 1099,
  discount: "18% OFF",
  rating: 4.9,
  review: 528,
  stock: "Limited Stock",
  deliver: "Free Delivery",
  description:
    "Lightweight water gel moisturizer with hyaluronic acid for long-lasting hydration.",
},
{
  id: 1004,
  category: "Skincare",
  brand: "The Derma Co",
  name: "1% Hyaluronic Sunscreen SPF 50",
  image: skincare4,
  new_price: 499,
  old_price: 599,
  discount: "17% OFF",
  rating: 4.7,
  review: 341,
  stock: "In Stock",
  deliver: "Free Delivery",
  description:
    "Broad-spectrum SPF 50 sunscreen with hyaluronic acid for hydration and UV protection.",
},

{
  id: 1005,
  category: "Makeup",
  brand: "Maybelline",
  name: "Fit Me Matte Foundation",
  image: makeup1,
  new_price: 549,
  old_price: 649,
  discount: "15% OFF",
  rating: 4.8,
  review: 642,
  stock: "In Stock",
  deliver: "Free Delivery",
  description:
    "Lightweight matte foundation that provides natural coverage and controls shine all day.",
},
{
  id: 1006,
  category: "Makeup",
  brand: "Lakme",
  name: "9to5 Primer + Matte Lipstick",
  image: makeup2,
  new_price: 399,
  old_price: 499,
  discount: "20% OFF",
  rating: 4.7,
  review: 486,
  stock: "In Stock",
  deliver: "Free Delivery",
  description:
    "Long-lasting matte lipstick with smooth application and rich color payoff.",
},
{
  id: 1007,
  category: "Makeup",
  brand: "Swiss Beauty",
  name: "Ultimate Eyeshadow Palette",
  image: makeup3,
  new_price: 699,
  old_price: 899,
  discount: "22% OFF",
  rating: 4.6,
  review: 315,
  stock: "Limited Stock",
  deliver: "Free Delivery",
  description:
    "Highly pigmented eyeshadow palette featuring matte and shimmer shades for every occasion.",
},
{
  id: 1008,
  category: "Makeup",
  brand: "L'Oréal Paris",
  name: "Volume Million Lashes Mascara",
  image: makeup4,
  new_price: 799,
  old_price: 999,
  discount: "20% OFF",
  rating: 4.8,
  review: 371,
  stock: "In Stock",
  deliver: "Free Delivery",
  description:
    "Waterproof mascara that delivers intense volume, length, and definition without clumping.",
},

{
  id: 1009,
  category: "Hair Care",
  brand: "L'Oréal Paris",
  name: "Total Repair 5 Shampoo",
  image: haircare1,
  new_price: 349,
  old_price: 449,
  discount: "22% OFF",
  rating: 4.7,
  review: 428,
  stock: "In Stock",
  deliver: "Free Delivery",
  description:
    "Nourishing shampoo that helps repair damaged hair, reduce breakage, and restore shine.",
},
{
  id: 1010,
  category: "Hair Care",
  brand: "Dove",
  name: "Intense Repair Conditioner",
  image: haircare2,
  new_price: 299,
  old_price: 399,
  discount: "25% OFF",
  rating: 4.6,
  review: 376,
  stock: "In Stock",
  deliver: "Free Delivery",
  description:
    "Deep conditioning formula that smooths frizzy hair and strengthens every strand.",
},
{
  id: 1011,
  category: "Hair Care",
  brand: "Mamaearth",
  name: "Onion Hair Oil",
  image: haircare3,
  new_price: 499,
  old_price: 599,
  discount: "17% OFF",
  rating: 4.8,
  review: 512,
  stock: "Limited Stock",
  deliver: "Free Delivery",
  description:
    "Onion hair oil enriched with natural ingredients to reduce hair fall and promote healthy hair growth.",
},
{
  id: 1012,
  category: "Hair Care",
  brand: "Tresemmé",
  name: "Keratin Smooth Hair Serum",
  image: haircare4,
  new_price: 549,
  old_price: 699,
  discount: "21% OFF",
  rating: 4.7,
  review: 294,
  stock: "In Stock",
  deliver: "Free Delivery",
  description:
    "Lightweight hair serum that controls frizz, adds shine, and leaves hair silky smooth.",
},

{
  id: 1013,
  category: "Fragrances",
  brand: "Bella Vita",
  name: "CEO Man Eau De Parfum",
  image: fragrance1,
  new_price: 599,
  old_price: 899,
  discount: "33% OFF",
  rating: 4.7,
  review: 486,
  stock: "In Stock",
  deliver: "Free Delivery",
  description:
    "Long-lasting premium perfume with fresh citrus and woody notes, perfect for everyday wear.",
},
{
  id: 1014,
  category: "Fragrances",
  brand: "Fogg",
  name: "Fogg Impressio Perfume",
  image: fragrance2,
  new_price: 449,
  old_price: 599,
  discount: "25% OFF",
  rating: 4.6,
  review: 352,
  stock: "In Stock",
  deliver: "Free Delivery",
  description:
    "Refreshing fragrance with a long-lasting aroma, ideal for daily use and special occasions.",
},
{
  id: 1015,
  category: "Fragrances",
  brand: "Yardley London",
  name: "Morning Dew Perfume",
  image: fragrance3,
  new_price: 799,
  old_price: 999,
  discount: "20% OFF",
  rating: 4.8,
  review: 291,
  stock: "Limited Stock",
  deliver: "Free Delivery",
  description:
    "Elegant floral fragrance with a refreshing scent that lasts throughout the day.",
},
{
  id: 1016,
  category: "Fragrances",
  brand: "The Man Company",
  name: "Blanc Eau De Parfum",
  image: fragrance4,
  new_price: 699,
  old_price: 999,
  discount: "30% OFF",
  rating: 4.7,
  review: 338,
  stock: "In Stock",
  deliver: "Free Delivery",
  description:
    "Premium men's perfume with woody, spicy, and musky notes for a sophisticated fragrance.",
},

{
  id: 1017,
  category: "BathBody",
  brand: "Nivea",
  name: "Nourishing Body Lotion",
  image: bathbody1,
  new_price: 349,
  old_price: 449,
  discount: "22% OFF",
  rating: 4.8,
  review: 476,
  stock: "In Stock",
  deliver: "Free Delivery",
  description:
    "Deeply nourishing body lotion enriched with almond oil for soft, smooth, and hydrated skin.",
},
{
  id: 1018,
  category: "BathBody",
  brand: "Dove",
  name: "Deep Moisture Body Wash",
  image: bathbody2,
  new_price: 299,
  old_price: 399,
  discount: "25% OFF",
  rating: 4.7,
  review: 395,
  stock: "In Stock",
  deliver: "Free Delivery",
  description:
    "Gentle body wash with moisturizing cream that cleanses while keeping skin soft and hydrated.",
},
{
  id: 1019,
  category: "BathBody",
  brand: "The Body Shop",
  name: "Shea Butter Body Cream",
  image: bathbody3,
  new_price: 1099,
  old_price: 1399,
  discount: "21% OFF",
  rating: 4.9,
  review: 264,
  stock: "Limited Stock",
  deliver: "Free Delivery",
  description:
    "Rich body cream infused with shea butter to provide 96-hour moisture for dry skin.",
},
{
  id: 1020,
  category: "BathBody",
  brand: "Mamaearth",
  name: "Ubtan Body Scrub",
  image: bathbody4,
  new_price: 399,
  old_price: 549,
  discount: "27% OFF",
  rating: 4.6,
  review: 318,
  stock: "In Stock",
  deliver: "Free Delivery",
  description:
    "Natural body scrub with turmeric and walnut beads that exfoliates dead skin and enhances skin glow.",
},

{
  id: 1021,
  category: "Grooming",
  brand: "Beardo",
  name: "Beard Growth Oil",
  image: grooming1,
  new_price: 399,
  old_price: 499,
  discount: "20% OFF",
  rating: 4.7,
  review: 432,
  stock: "In Stock",
  deliver: "Free Delivery",
  description:
    "Natural beard growth oil enriched with essential oils to nourish, soften, and promote healthy beard growth.",
},
{
  id: 1022,
  category: "Grooming",
  brand: "Bombay Shaving Company",
  name: "Shaving Kit",
  image: grooming2,
  new_price: 899,
  old_price: 1199,
  discount: "25% OFF",
  rating: 4.8,
  review: 318,
  stock: "In Stock",
  deliver: "Free Delivery",
  description:
    "Complete shaving kit including shaving cream, razor, aftershave balm, and brush for a smooth shaving experience.",
},
{
  id: 1023,
  category: "Grooming",
  brand: "Gillette",
  name: "Fusion5 Razor",
  image: grooming3,
  new_price: 699,
  old_price: 899,
  discount: "22% OFF",
  rating: 4.6,
  review: 285,
  stock: "Limited Stock",
  deliver: "Free Delivery",
  description:
    "Premium 5-blade razor designed for a close, comfortable shave with precision trimming.",
},
{
  id: 1024,
  category: "Grooming",
  brand: "The Man Company",
  name: "Charcoal Face Wash",
  image: grooming4,
  new_price: 349,
  old_price: 449,
  discount: "22% OFF",
  rating: 4.7,
  review: 364,
  stock: "In Stock",
  deliver: "Free Delivery",
  description:
    "Activated charcoal face wash that deeply cleanses the skin, removes excess oil, and refreshes the face.",
},
]
export default beautyproduct;