import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Offerproduct.css";
import { ShopContext } from "../../Context/ShopContext";

const Offerproduct = () => {
  const { allProducts } = useContext(ShopContext);

  const electronicDeals = allProducts.filter(
    (item) => item.category === "Electronic Deals"
  );

  return (
    <div className="electronics">
      <div className="electronics-header">
        <h2>Up to 45% Off | Electronics & Accessories</h2>
      </div>

      <div className="electronics-container">
        {electronicDeals.map((item) => (
          <Link
            key={item._id}
            to={`/product/${item._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="electronics-card">
              <img
                src={
                  item.image?.startsWith("http")
                    ? item.image
                    : `http://localhost:5000/${item.image
                        ?.replace(/^\/?public\//, "")
                        .replace(/^\//, "")}`
                }
                alt={item.name}
              />

              <div className="electronics-info">
                <h3>{item.name}</h3>

                <p>{item.description}</p>

                <div className="price">
                  <span className="new-price">
                    ₹{item.new_price}
                  </span>

                  <span className="old-price">
                    ₹{item.old_price}
                  </span>
                </div>

                <button>{item.discount}</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Offerproduct;