import React from "react";
import { Link } from "react-router-dom";
import "./Tshirt.css";
import mensproduct from "../Assets/mensproduct";

const Shoes = () => {
  const shoes = mensproduct.filter(
    (item) => item.category === "Shoes"
  );

  return (
    <div className="tshirt-page">
      <h2>Men's Sports Shoes</h2>

      <div className="tshirt-grid">
        {shoes.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="tshirt-card">
              <img src={item.image} alt={item.name} />

              <h3>{item.brand}</h3>

              <p className="name">{item.name}</p>

              <div className="rating">
                ⭐ {item.rating} ({item.reviews})
              </div>

              <div className="price">
                <span className="new-price">₹{item.new_price}</span>

                <span className="old-price">
                  ₹{item.old_price}
                </span>

                <span className="discount">
                  {item.discount}
                </span>
              </div>

              <p>
                <b>Color:</b> {item.color}
              </p>

              <p>
                <b>Sizes:</b> {item.sizes.join(", ")}
              </p>

              <p className="stock">{item.stock}</p>

              <button
                className="cart-btn"
                onClick={(e) => e.preventDefault()}
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shoes;