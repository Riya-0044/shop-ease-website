import React, { createContext, useState, useEffect } from "react";
import API from "../services/api";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [authLoading, setAuthLoading] = useState(true);

  // On first load, restore session from localStorage and verify it with the backend
  useEffect(() => {
    const restoreSession = async () => {
      const savedToken = localStorage.getItem("token");
      const savedName = localStorage.getItem("userName");
      const savedEmail = localStorage.getItem("userEmail");
      const savedId = localStorage.getItem("userId");

      if (!savedToken) {
        setAuthLoading(false);
        return;
      }

      if (savedId) {
        setUser({ id: savedId, name: savedName, email: savedEmail });
      }

      try {
        const res = await API.get("/user/me");
        setUser(res.data.user);
        setToken(savedToken);
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        setUser(null);
        setToken(null);
      } finally {
        setAuthLoading(false);
      }
    };

    restoreSession();
  }, []);

  const persistSession = (newToken, newUser) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("userId", newUser.id);
    localStorage.setItem("userName", newUser.name);
    localStorage.setItem("userEmail", newUser.email);
    setToken(newToken);
    setUser(newUser);
  };

  const login = async (email, password) => {
    try {
      const res = await API.post("/user/login", { email, password });
      persistSession(res.data.token, res.data.user);
      return { success: true, message: res.data.message };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed. Please try again.",
      };
    }
  };

  const signup = async (name, email, password) => {
    try {
      const res = await API.post("/user/register", { name, email, password });
      persistSession(res.data.token, res.data.user);
      return { success: true, message: res.data.message };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Registration failed. Please try again.",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("familyId");
    setUser(null);
    setToken(null);
  };

  const value = {
    user,
    token,
    authLoading,
    isAuthenticated: !!token && !!user,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;