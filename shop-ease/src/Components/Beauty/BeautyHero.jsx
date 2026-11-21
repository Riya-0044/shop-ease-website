import React, { useEffect, useState } from "react";
import "../MensHero/MensHero.css";
import hero16 from "../Assets/hero16.jpg";
import hero17 from "../Assets/hero17.jpg";
import hero18 from "../Assets/hero18.jpg";

const images = [hero16, hero17, hero18];

const BeautyHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mens-hero">
      <img src={images[current]} alt="Beauty Hero" />
    </div>
  );
};

export default BeautyHero;