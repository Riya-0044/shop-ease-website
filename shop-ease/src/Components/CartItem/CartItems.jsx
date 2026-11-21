import React, { useContext, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import axios from "axios";

const CartItems = () => {
  const {
    allProducts,
    cartItems,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(ShopContext);

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoMsg, setPromoMsg] = useState("");

  const subtotal = getTotalCartAmount();
  const discount = promoApplied ? Math.round(subtotal * 0.1) : 0; // 10% discount
  const finalTotal = subtotal - discount;

  const applyPromo = () => {
    if (promoCode.trim() === "") {
      setPromoApplied(false);
      setPromoMsg("Please enter a promo code");
      return;
    }
    setPromoApplied(true);
    setPromoMsg("Promo code applied! 10% discount .");
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/payment/create-order",
        {
          amount: finalTotal,
        }
      );

      const options = {
        key: "rzp_test_TGpX1uSYcMoXso",
        amount: response.data.order.amount,
        currency: response.data.order.currency,
        name: "ShopEase",
        description: "Order Payment",
        order_id: response.data.order.id,

        handler: async function (response) {
          try {
            const userId = localStorage.getItem("userId");

            const products = allProducts
              .filter((p) => cartItems[p._id] > 0)
              .map((p) => ({
                product: p._id,
                quantity: cartItems[p._id],
              }));

            await axios.post(
              "http://localhost:5000/api/orders/place",
              {
                user: userId,
                products,
                totalPrice: finalTotal,
              }
            );

            alert("Order Placed Successfully");
          } catch (error) {
            console.log(error);
            alert("Order Save Failed");
          }
        },

        prefill: {
          name: "Riya Aggarwal",
          email: "riya@example.com",
          contact: "9999999999",
        },

        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", function () {
        alert("Payment Failed");
      });

      razorpay.open();
    } catch (error) {
      console.log(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />

      {allProducts.map((e) => {
        if (cartItems[e._id] > 0) {
          return (
            <div key={e._id}>
              <div className="cartitems-format">
                <img
                  src={`http://localhost:5000${e.image}`}
                  alt={e.name}
                  className="carticon-product-icon"
                />

                <p>{e.name}</p>

                <p>₹{e.new_price}</p>

                <button className="cartitems-quantity">
                  {cartItems[e._id]}
                </button>

                <p>₹{e.new_price * cartItems[e._id]}</p>

                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  alt="Remove"
                  onClick={() => removeFromCart(e._id)}
                />
              </div>

              <hr />
            </div>
          );
        }

        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>

          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₹{subtotal}</p>
            </div>

            <hr />

            {promoApplied && (
              <>
                <div className="cartitems-total-item">
                  <p>Discount (10%)</p>
                  <p>-₹{discount}</p>
                </div>

                <hr />
              </>
            )}

            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>

            <hr />

            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₹{finalTotal}</h3>
            </div>
          </div>

          <button onClick={handlePayment}>
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>

          <div className="cartitems-promobox">
            <input
              type="text"
              placeholder="Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={applyPromo}>Submit</button>
          </div>

          {promoMsg && (
            <p
              style={{
                color: promoApplied ? "green" : "red",
                marginTop: "10px",
              }}
            >
              {promoMsg}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItems;
