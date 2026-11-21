import React from "react";
import { Link } from "react-router-dom";
import "../Menscategory/Menscategory.css";
import kidscategory from "../Assets/kidscategory";

const KidsCategory = () => {
  return (
    <div className="mens-category">
      <div className="category-grid">
        {kidscategory.map((item) => (
          <Link
            key={item.id}
            to={
              item.name === "T-Shirts"
                ? "/kids/tshirts"
                : item.name === "Shirts"
                ? "/kids/shirts"
                : item.name === "Jeans"
                ? "/kids/jeans"
                : item.name === "Shoes"
                ? "/kids/shoes"
                : item.name === "Dresses"
                ? "/kids/dresses"
                : item.name === "Toys"
                ? "/kids/toys"
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

export default KidsCategory;