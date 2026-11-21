/*import React from "react";
import "./Menscategory.css";
import menscategory from "../Assets/menscategory";

const Menscategory = () => {
  return (
    <div className="mens-category">

      <div className="category-grid">
        {menscategory.map((item) => (
          <div className="category-card" key={item.id}>
            <div className="category-image">
              <img src={item.image} alt={item.name} />
            </div>

            <h4 className="category-name">{item.name}</h4>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Menscategory;*/

import React from "react";
import { Link } from "react-router-dom";
import "./Menscategory.css";
import menscategory from "../Assets/menscategory";

const Menscategory = () => {
  return (
    <div className="mens-category">
      <div className="category-grid">
        {menscategory.map((item) => (
          <Link
            key={item.id}

            to={
              item.name === "T-Shirts"
                ? "/mens/tshirts"
                : item.name === "Jeans"
                  ? "/mens/jeans"

                  : item.name === "Shoes"
                    ? "/mens/shoes"

                    : item.name === "Watches"
                      ? "/mens/watches"
                      : item.name === "Sportswear"
                        ? "/mens/sportswear"
                        
                        : item.name === "Formalwear"
                        ? "/mens/formalwear"
                        :"#"
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

export default Menscategory;