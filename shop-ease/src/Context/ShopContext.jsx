
import React, { createContext, useState, useEffect } from "react";
import API from "../services/api";
export const ShopContext = createContext();

const getDefaultCart = () => {
  return {};
};

const ShopContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Products
        const productRes = await API.get("/products");

        // DEBUG: check this in your console to see the real shape of the response
        console.log("Products API response:", productRes.data);
        console.log("Sample product object:", productRes.data[0] || productRes.data.products?.[0]);

        // Handle both possible shapes: a plain array, or { products: [...] }
        const products = Array.isArray(productRes.data)
          ? productRes.data
          : productRes.data.products || [];

        setAllProducts(products);

        // Cart
        const userId = localStorage.getItem("userId");

        if (userId) {
          const cartRes = await API.get(`/cart/${userId}`);

          let cartData = {};

          if (cartRes.data.success && Array.isArray(cartRes.data.cart)) {
            cartRes.data.cart.forEach((item) => {
              cartData[item.product._id] = item.quantity;
            });
          }

          setCartItems(cartData);
        }
      } catch (error) {
        console.log("Error fetching shop data:", error);
      }
    };

    fetchData();
  }, []);

  const addToCart = async (itemId) => {
    try {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        alert("Please login first");
        return;
      }

      await API.post("/cart/add", {
        user: userId,
        product: itemId,
        quantity: 1,
      });

      setCartItems((prev) => ({
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1,
      }));

      console.log("Product Added To Cart");
    } catch (error) {
      console.log(error);
      alert("Failed to add product to cart");
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));
  };

  const getTotalCartAmount = () => {
    let total = 0;

    allProducts.forEach((item) => {
      if (cartItems[item._id] > 0) {
        const price = Number(
          String(item.new_price || item.price || 0).replace(/[₹,]/g, "")
        );

        total += price * cartItems[item._id];
      }
    });

    return total;
  };

  const getTotalCartItems = () => {
    let total = 0;

    Object.values(cartItems).forEach((qty) => {
      total += qty;
    });

    return total;
  };

  const value = {
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;