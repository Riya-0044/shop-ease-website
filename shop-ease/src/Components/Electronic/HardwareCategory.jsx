import React from "react";
import { Link } from "react-router-dom";
import "../Menscategory/Menscategory.css";
import electroniccategory from "../Assets/electroniccategory";

const HardwareCategory = () => {
  return (
    <div className="mens-category">
      <div className="category-grid">
        {electroniccategory.map((item) => (
          <Link
            key={item.id}
            to={
              item.name === "Laptops"
                ? "/electronics/laptops"
                : item.name === "Mobiles"
                ? "/electronics/mobiles"
                : item.name === "Tablets"
                ? "/electronics/tablets"
                : item.name === "Headphones"
                ? "/electronics/headphones"
                : item.name === "Speakers"
                ? "/electronics/speakers"
                : item.name === "Cameras"
                ? "/electronics/cameras"
                : "#"
            }
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="category-card">
              <div className="category-image">
                <img src={item.image} alt={item.name} />
              </div>

              <h4 className="category-name">{item.name}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HardwareCategory;