import React from "react";
import { Link, useParams } from "react-router-dom";
import "../Menspage/Tshirt.css";
import furnitureproduct from "../Assets/furnitureproduct";

const FurnitureProduct = () => {
  const { category } = useParams();

  const products = furnitureproduct.filter(
    (item) =>
      item.category.toLowerCase().replace(/\s+/g, "") ===
      category.toLowerCase()
  );

  return (
    <div className="tshirt-page">
      <div className="tshirt-grid">
        {products.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="tshirt-card">
              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <p className="brand">{item.brand}</p>

              <div className="price">
                <span className="new-price">₹{item.new_price}</span>
                <span className="old-price">₹{item.old_price}</span>
              </div>

              <p className="discount">{item.discount}</p>

              <div className="rating">
                ⭐ {item.rating} ({item.review})
              </div>
            </div>
          </Link>
        ))}

        {products.length === 0 && (
          <h2 style={{ textAlign: "center", width: "100%" }}>
            No Products Found
          </h2>
        )}
      </div>
    </div>
  );
};

export default FurnitureProduct;