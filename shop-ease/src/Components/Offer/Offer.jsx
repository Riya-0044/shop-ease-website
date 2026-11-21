import React, { useState, useEffect } from "react";
import "./Offer.css";

import hero5 from "../Assets/Hero_5.avif";
import hero6 from "../Assets/Hero_6.avif";
import hero7 from "../Assets/Hero_7.avif";
import hero8 from "../Assets/Hero_8.avif";
import hero9 from "../Assets/Hero_9.avif";

const banners = [
  hero5,
  hero6,
  hero7,
  hero8,
  hero9,
];

const Offer = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const getBanner = (index) => {
    return banners[(current + index) % banners.length];
  };

  return (
    <div className="offer-wrapper">

      <div className="offer-card">
        <img src={getBanner(0)} alt="" />
      </div>

      <div className="offer-card">
        <img src={getBanner(1)} alt="" />
      </div>

      <div className="offer-card">
        <img src={getBanner(2)} alt="" />
      </div>

      <div className="offer-card">
        <img src={getBanner(3)} alt="" />
      </div>

      <div className="offer-card">
        <img src={getBanner(4)} alt="" />
      </div>

    </div>
  );
};

export default Offer;