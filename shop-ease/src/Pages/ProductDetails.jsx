
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { ShopContext } from "../Context/ShopContext";
import { FamilyContext } from "../Context/FamilyContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { allProducts, addToCart } = useContext(ShopContext);
  const { family, addToFamilyCart } = useContext(FamilyContext);

  const [userRating, setUserRating] = useState(0);
  const [aiRating, setAiRating] = useState(4.6);
  const [positiveReviews, setPositiveReviews] = useState(89);

  const [overallOpinion, setOverallOpinion] = useState("");
  const [liked, setLiked] = useState("");
  const [disliked, setDisliked] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const product = allProducts.find(
    (item) =>
      String(item._id) === String(id) || String(item.id) === String(id)
  );

  if (!product) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2>Product Not Found</h2>
      </div>
    );
  }

  const handleAddToFamilyCart = () => {
    if (!family?._id) {
      alert("Pehle ek family join ya create karo.");
      return;
    }
    addToFamilyCart(family._id, product._id);
    alert("Product Family Cart mein add ho gaya!");
    navigate(`/family/cart/${family._id}`);
  };

  return (
    <div className="product-details">
      {/* Left Side */}
      <div className="product-left">
        <img
          src={
            product.image?.startsWith("http")
              ? product.image
              : `http://localhost:5000/${product.image?.replace(/^\/?public\//, "").replace(/^\//, "")}`
          }
          alt={product.name}
        />
      </div>

      {/* Right Side */}
      <div className="product-right">
        <h3>{product.brand}</h3>
        <h1>{product.name}</h1>

        <div className="price">
          <span className="new-price">₹{product.new_price}</span>
          <span className="old-price">₹{product.old_price}</span>
          {product.discount && (
            <span className="discount">{product.discount}</span>
          )}
        </div>

        <p>
          <b>Category:</b> {product.category}
        </p>

        {product.color && product.color.length > 0 && (
          <p>
            <b>Color:</b> {product.color.join(", ")}
          </p>
        )}

        {product.sizes && product.sizes.length > 0 && (
          <div className="sizes">
            <b>Sizes:</b>
            <div className="size-buttons">
              {product.sizes.map((size) => (
                <button key={size}>{size}</button>
              ))}
            </div>
          </div>
        )}

        <p>
          <b>Availability:</b> {product.stock}
        </p>
        <p>
          <b>Delivery:</b> {product.delivery}
        </p>

        <div className="description">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>

        <div className="cart-btn-group">
          <button
            className="cart-btn"
            onClick={() => {
              addToCart(product._id);
              navigate("/cart");
            }}
          >
            Add to Cart
          </button>

          <button
            className="cart-btn family-cart-btn"
            onClick={handleAddToFamilyCart}
          >
            Add to Family Cart
          </button>
        </div>

        <div className="user-rating">
          <h3>Rate this Product</h3>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= userRating ? "star active" : "star"}
                onClick={() => {
                  setUserRating(star);
                  setAiRating(star);

                  if (star === 5) setPositiveReviews(98);
                  else if (star === 4) setPositiveReviews(92);
                  else if (star === 3) setPositiveReviews(78);
                  else if (star === 2) setPositiveReviews(60);
                  else setPositiveReviews(42);
                }}
              >
                ★
              </span>
            ))}
          </div>

          {userRating > 0 && (
            <p className="thanks">
              Thanks! You rated this product {userRating} ★
            </p>
          )}
        </div>

        {/* ================= Review Summary ================= */}
        <div className="review-summary">
          <h2>Review Summary</h2>

          <div className="summary-card">
            <div className="summary-header">
              <div
                className="summary-rating"
                style={{ "--rating-pct": (aiRating / 5) * 100 }}
              >
                {aiRating.toFixed(1)}
              </div>
              <div className="summary-review-count">
                <strong>{aiRating.toFixed(1)} / 5</strong> average
                <br />
                Based on 1,820 Customer Reviews
              </div>
            </div>

            <div className="summary-overall">
              <h3>Overall Opinion</h3>
              <textarea
                value={overallOpinion}
                onChange={(e) => setOverallOpinion(e.target.value)}
                placeholder="Write your opinion..."
              />
            </div>

            <div className="summary-grid">
              <div className="liked-box">
                <h3>👍 Customers Liked</h3>
                <textarea
                  className="review-input"
                  rows={6}
                  value={liked}
                  onChange={(e) => setLiked(e.target.value)}
                  placeholder="Share your experience with this product..."
                  maxLength={150}
                />
              </div>

              <div className="disliked-box">
                <h3>👎 Customers Didn't Like</h3>
                <textarea
                  className="review-input"
                  rows={6}
                  placeholder="Write what you didn't like..."
                  value={disliked}
                  onChange={(e) => setDisliked(e.target.value)}
                  maxLength={150}
                />
              </div>
            </div>

            <button
              className="submit-review-btn"
              onClick={() => setSubmitted(true)}
            >
              Submit Review
            </button>

            {submitted && (
              <div className="submitted-review">
                <h3>Your Review</h3>
                <p><b>Overall Opinion:</b> {overallOpinion}</p>
                <p><b>👍 Liked:</b> {liked}</p>
                <p><b>👎 Didn't Like:</b> {disliked}</p>
              </div>
            )}

            <div
              className="overall-sentiment"
              style={{ "--positive-pct": `${positiveReviews}%` }}
              data-label={`${positiveReviews}% Positive Reviews`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;