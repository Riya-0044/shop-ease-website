import React from "react";
import { Link } from "react-router-dom";
import "../Menscategory/Menscategory.css";
import furniturecategory from "../Assets/furniturecategory";

const FurnitureCategory = () => {
  return (
    <div className="mens-category">
      <div className="category-grid">
        {furniturecategory.map((item) => (
          <Link
            key={item.id}
            to={
              item.name === "Sofas"
                ? "/furniture/sofas"
                : item.name === "Beds"
                ? "/furniture/beds"
                : item.name === "Dining"
                ? "/furniture/dining"
                : item.name === "Chairs"
                ? "/furniture/chairs"
                : item.name === "Coffee Tables"
                ? "/furniture/coffeetables"
                : item.name === "Wardrobes"
                ? "/furniture/wardrobes"
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

export default FurnitureCategory;