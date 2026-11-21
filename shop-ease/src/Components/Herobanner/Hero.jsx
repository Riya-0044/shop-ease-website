import { useState } from "react";
import "./Hero.css";

import hero1 from "../Assets/Hero_1.jpg";
import hero3 from "../Assets/Hero_3.jpg";
import hero4 from "../Assets/Hero_4.jpg";

const Hero = () => {

  const [banner, setBanner] = useState(0);

  const images = [hero1, hero3 , hero4];

  const nextBanner = () => {
    setBanner((banner + 1) % images.length);
  };

  const prevBanner = () => {
    setBanner((banner - 1 + images.length) % images.length);
  };

  return (
    <div className="hero">

      <button className="left-btn" onClick={prevBanner}>
        &#10094;
      </button>

      <img src={images[banner]} alt="" className="hero-img" />

      <button className="right-btn" onClick={nextBanner}>
        &#10095;
      </button>

    </div>
  );
};

export default Hero;



    