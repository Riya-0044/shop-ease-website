import React, { useEffect, useState } from "react";
import "./MensHero.css";
import hero4 from "../Assets/menshero_4.png";
import hero5 from "../Assets/menshero_5.png";
import hero6 from "../Assets/menshero_6.png";

const images = [hero4, hero5, hero6];

const MensHero = () => {
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

export default MensHero;