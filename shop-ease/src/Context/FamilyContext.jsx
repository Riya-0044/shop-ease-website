

import React, { createContext, useEffect, useState } from "react";
import API from "../services/api";

export const FamilyContext = createContext();

const FamilyContextProvider = ({ children }) => {
  const [family, setFamily] = useState(null);
  const [familyCart, setFamilyCart] = useState([]);
  const [loading, setLoading] = useState(false);

  // Create Family
  const createFamily = async (familyName) => {
    try {
      const admin = localStorage.getItem("userId");

      const res = await API.post("/family/create", {
        familyName,
        admin,
      });

      setFamily(res.data.family);

      localStorage.setItem("familyId", res.data.family._id);

      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  // Join Family
  const joinFamily = async (inviteCode) => {
    try {
      const userId = localStorage.getItem("userId");

      const res = await API.post("/family/join", {
        inviteCode,
        userId,
      });

      setFamily(res.data.family);

      localStorage.setItem("familyId", res.data.family._id);

      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  // Get Family (by family id)
  const getFamily = async (familyId) => {
    try {
      const res = await API.get(`/family/${familyId}`);
      setFamily(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Get the family the CURRENT logged-in user actually belongs to.
  // Isse localStorage ka purana/galat familyId kabhi use nahi hota.
  const getFamilyForCurrentUser = async () => {
    try {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        setFamily(null);
        localStorage.removeItem("familyId");
        return;
      }

      const res = await API.get(`/family/by-user/${userId}`);

      if (res.data) {
        setFamily(res.data);
        localStorage.setItem("familyId", res.data._id);
      } else {
        setFamily(null);
        localStorage.removeItem("familyId");
      }
    } catch (error) {
      console.log(error);
      setFamily(null);
    }
  };

  // Get Family Cart
  const getFamilyCart = async (familyId) => {
    try {
      setLoading(true);

      const res = await API.get(`/cart/family/${familyId}`);

      // backend { success: true, cart: [...] } bhejta hai,
      // isliye res.data.cart lena hai, res.data nahi
      setFamilyCart(res.data.cart || []);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setFamilyCart([]);
      setLoading(false);
    }
  };

  // Add Product
  const addToFamilyCart = async (familyId, productId) => {
    try {
      const user = localStorage.getItem("userId");

      await API.post("/cart/add", {
        user,
        family: familyId,
        product: productId,
        quantity: 1,
        cartType: "Family",
      });

      getFamilyCart(familyId);
    } catch (error) {
      console.log(error);
    }
  };

  // Update Quantity
  const updateQuantity = async (cartId, quantity, familyId) => {
    try {
      await API.put("/cart/update", {
        cartId,
        quantity,
      });

      getFamilyCart(familyId);
    } catch (error) {
      console.log(error);
    }
  };

  // Remove Product
  const removeFromFamilyCart = async (cartId, familyId) => {
    try {
      await API.delete("/cart/remove", {
        data: {
          cartId,
        },
      });

      getFamilyCart(familyId);
    } catch (error) {
      console.log(error);
    }
  };

  // Checkout
  const checkoutFamily = async (familyId, totalPrice) => {
    try {
      const user = localStorage.getItem("userId");

      await API.post("/orders/place", {
        user,
        family: familyId,
        products: familyCart.map((item) => ({
          product: item.product._id,
          quantity: item.quantity,
          addedBy: item.addedBy,
        })),
        totalPrice,
        orderType: "Family",
      });

      alert("Family Order Placed Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // Jab bhi app load ho (ya user badle), current logged-in user ki
  // asli family dhundo — localStorage ke purane familyId par bharosa mat karo
  useEffect(() => {
    getFamilyForCurrentUser();
  }, []);

  // Load cart whenever family changes
  useEffect(() => {
    if (family?._id) {
      getFamilyCart(family._id);
    } else {
      setFamilyCart([]);
    }
  }, [family]);

  return (
    <FamilyContext.Provider
      value={{
        family,
        familyCart,
        loading,
        createFamily,
        joinFamily,
        getFamily,
        getFamilyForCurrentUser,
        getFamilyCart,
        addToFamilyCart,
        updateQuantity,
        removeFromFamilyCart,
        checkoutFamily,
      }}
    >
      {children}
    </FamilyContext.Provider>
  );
};

export default FamilyContextProvider;