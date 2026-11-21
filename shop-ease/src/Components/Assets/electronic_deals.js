import earbuds from "./earbuds.jpg";
import samsung_mointor from "./samsung_mointor.jpg";
import powerbank from "./powerbank.jpg";

import speaker from "./speaker.jpg";
import dell_monitor from "./dell_monitor.jpg";
import mi_powerbank from "./mi_powerbank.jpg";
import Ig_monitor from "./Ig_monitor.webp";
import headphones from "./headphones.jpg";
import printer from "./printer.webp";

const electronic_deals = [
  {
    id: 101,
    name: "OnePlus Nord Buds 3",
    image: earbuds,
    description: "Wireless Bluetooth earbuds with ENC noise cancellation and 38-hour battery backup.",
    new_price: "₹2,299",
    old_price: "₹3,499",
    discount: "34% OFF",
  },
  {
    id:102,
    name: "Samsung Essential Monitor S3",
    image: samsung_mointor,
    description: "24-inch Full HD IPS monitor with eye comfort technology.",
    new_price: "₹8,999",
    old_price: "₹11,999",
    discount: "25% OFF",
  },
  {
    id: 103,
    name: "Portronics Power Bank 20000mAh",
    image: powerbank,
    description: "Fast charging power bank with dual USB output and Type-C input.",
    new_price: "₹1,499",
    old_price: "₹2,199",
    discount: "32% OFF",
  },
  /*{
    id: 4,
    name: "Noise ColorFit Smart Watch",
    image: smartwatch,
    description: "1.85-inch HD display with heart rate, SpO₂ monitor and 100+ sports modes.",
    price: "₹1,799",
    old_price: "₹3,999",
    discount: "55% OFF",
  },*/
  {
    id: 105,
    name: "boAt Stone Bluetooth Speaker",
    image: speaker,
    description: "Portable wireless speaker with deep bass and IPX5 water resistance.",
    new_price: "₹1,299",
    old_price: "₹2,499",
    discount: "48% OFF",
  },
  {
    id: 106,
    name: "Dell 27-inch Full HD Monitor",
    image: dell_monitor,
    description: "Slim bezel IPS monitor with Full HD resolution.",
    new_price: "₹12,999",
    old_price: "₹15,999",
    discount: "19% OFF",
  },
  {
    id: 107,
    name: "Mi 10000mAh Power Bank",
    image: mi_powerbank,
    description: "Compact fast charging power bank with USB-C support.",
    new_price: "₹999",
    old_price: "₹1,699",
    discount: "41% OFF",
  },
  {
    id: 108,
    name: "LG 27-inch HDR Monitor",
    image: Ig_monitor,
    description: "27-inch IPS monitor with HDR10 and vivid color accuracy.",
    new_price: "₹14,999",
    old_price: "₹19,999",
    discount: "25% OFF",
  },
  {
    id: 109,
    name: "JBL Tune 510BT Headphones",
    image: headphones,
    description: "Wireless headphones with Pure Bass sound and 40-hour battery life.",
    new_price: "₹2,499",
    old_price: "₹3,999",
    discount: "38% OFF",
  },
  {
    id: 1010,
    name: "Canon PIXMA All-in-One Printer",
    image: printer,
    description: "Colour inkjet printer for home and office with scan & copy support.",
    new_price: "₹5,999",
    old_price: "₹7,999",
    discount: "25% OFF",
  },
];

export default electronic_deals;