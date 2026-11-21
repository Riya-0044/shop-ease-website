import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../Components/Family/Family.css";

import { FamilyContext } from "../../Context/FamilyContext";
import FamilyProductCard from "../../Components/Family/FamilyProductCard";

const FamilyCart = () => {
  const { familyId } = useParams();

  const {
    familyCart,
    getFamilyCart,
    removeFromFamilyCart,
    checkoutFamily,
    loading,
  } = useContext(FamilyContext);

  useEffect(() => {
    getFamilyCart(familyId);
  }, [familyId]);

  const totalPrice = familyCart.reduce(
    (total, item) =>
      total + item.product.new_price * item.quantity,
    0
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="family-container">

      <h1 className="family-title">
        Family Shopping Cart
      </h1>

      {familyCart.length > 0 ? (
        <>
          {familyCart.map((item) => (
            <FamilyProductCard
              key={item._id}
              item={item}
              onRemove={() =>
                removeFromFamilyCart(
                  item._id,
                  familyId
                )
              }
            />
          ))}

          <div className="family-total">

            <h2>Total : ₹{totalPrice}</h2>

            <button
              className="checkout-btn"
              onClick={() =>
                checkoutFamily(
                  familyId,
                  totalPrice
                )
              }
            >
              Checkout
            </button>

          </div>
        </>
      ) : (
        <h3>No Products In Family Cart</h3>
      )}
    </div>
  );
};

export default FamilyCart;