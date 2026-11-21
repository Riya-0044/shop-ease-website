import React, { useEffect, useState } from "react";
import "../MensHero/MensHero.css";
import hero10 from "../Assets/hero10.png";
import hero11 from "../Assets/hero11.gif";
import hero12 from "../Assets/hero12.gif";

const images = [hero10, hero11, hero12];

const FurnitureHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mens-hero">
      <img src={images[current]} alt="Furniture Hero" />
    </div>
  );
};

export default FurnitureHero;