import React from "react";
import { Link } from "react-router-dom";
import "../Menscategory/Menscategory.css";
import womenscategory from "../Assets/womenscategory";

const WomensCategory = () => {
  return (
    <div className="mens-category">
      <div className="category-grid">
        {womenscategory.map((item) => (
          <Link
            key={item.id}
            to={
              item.name === "Sarees"
                ? "/womens/sarees"
                : item.name === "Kurtis"
                ? "/womens/kurtis"
                : item.name === "Jeans"
                ? "/womens/jeans"
                : item.name === "Shoes"
                ? "/womens/shoes"
                : item.name === "Leather Bags"
                ? "/womens/leatherbags"
                : item.name === "Watches"
                ? "/womens/watches"
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

export default WomensCategory;