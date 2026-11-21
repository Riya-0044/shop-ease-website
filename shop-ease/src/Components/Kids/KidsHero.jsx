import React, { useEffect, useState } from "react";
import "./KidsHero.css";

import hero1 from "../Assets/hero1.png";
import hero2 from "../Assets/hero2.png";
import hero3 from "../Assets/hero3.png";

const images = [hero1, hero2, hero3];

const KidsHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="kidshero">
      <img src={images[current]} alt="Kids Banner" />
    </div>
  );
};

export default KidsHero;