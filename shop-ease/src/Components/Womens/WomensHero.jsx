import React, { useEffect, useState } from "react";
import "../MensHero/MensHero.css";
import hero1 from "../Assets/womenshero_1.png";
import hero2 from "../Assets/womenshero_2.png";
import hero3 from "../Assets/womenshero_3.png";

const images = [hero1, hero2, hero3];

const WomensHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mens-hero">
      <img src={images[current]} alt="Men Hero" />
    </div>
  );
};

export default WomensHero;