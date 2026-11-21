import React from "react";
import { Link } from "react-router-dom";
import "../Menscategory/Menscategory.css";
import beautycategory from "../Assets/beautycategory";

const BeautyCategory = () => {
  return (
    <div className="mens-category">
      <div className="category-grid">
        {beautycategory.map((item) => (
          <Link
            key={item.id}
            to={
              item.name === "Skincare"
                ? "/beauty/skincare"
                : item.name === "Makeup"
                ? "/beauty/makeup"
                : item.name === "Hair Care"
                ? "/beauty/haircare"
                : item.name === "Fragrances"
                ? "/beauty/fragrances"
                : item.name === "BathBody"
                ? "/beauty/bathbody"
                : item.name === "Grooming"
                ? "/beauty/grooming"
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

export default BeautyCategory;