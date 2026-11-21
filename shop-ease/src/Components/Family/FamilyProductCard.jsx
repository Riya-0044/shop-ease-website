import React from "react";
import "./Family.css";

const FamilyProductCard = ({ item, onRemove }) => {
  return (
    <div className="family-product-card">
      <img
        src={`http://localhost:5000${item.product.image}`}
        alt={item.product.name}
        className="family-product-image"
      />

      <div className="family-product-details">
        <h3>{item.product.name}</h3>

        <p>Price : ₹{item.product.new_price}</p>

        <p>Quantity : {item.quantity}</p>

        <p>
          <strong>Added By :</strong> {item.addedBy?.name}
        </p>

        <p>
          <strong>Total :</strong> ₹
          {item.product.new_price * item.quantity}
        </p>
      </div>

      <button
        className="family-remove-btn"
        onClick={() => onRemove(item._id)}
      >
        Remove
      </button>
    </div>
  );
};

export default FamilyProductCard;