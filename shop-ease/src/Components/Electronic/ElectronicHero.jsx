import React, { useEffect, useState } from "react";
import "../MensHero/MensHero.css";
import hero13 from "../Assets/hero13.gif";
import hero14 from "../Assets/hero14.jpg";
import hero15 from "../Assets/hero15.jpg";

const images = [hero13, hero14, hero15];

const ElectronicHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mens-hero">
      <img src={images[current]} alt="Electronic Hero" />
    </div>
  );
};

export default ElectronicHero;
