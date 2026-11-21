

import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { AuthContext } from "../../Context/AuthContext";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { getTotalCartItems } = useContext(ShopContext);
  const { user, isAuthenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPEASE</p>
      </div>

      <ul className="nav-menu">

        <li>
          <Link to="/" className="nav-link" style={{ textDecoration: "none" }}>
            SHOP
          </Link>
          {location.pathname === "/" && <hr />}
        </li>

        <li>
          <Link to="/mens" className="nav-link" style={{ textDecoration: "none" }}>
            MENS
          </Link>
          {location.pathname.startsWith("/mens") && <hr />}
        </li>

        <li>
          <Link to="/womens" className="nav-link" style={{ textDecoration: "none" }}>
            WOMENS
          </Link>
          {location.pathname.startsWith("/womens") && <hr />}
        </li>

        <li>
          <Link to="/kids" className="nav-link" style={{ textDecoration: "none" }}>
            KIDS
          </Link>
          {location.pathname.startsWith("/kids") && <hr />}
        </li>

        <li>
          <Link to="/furniture" className="nav-link" style={{ textDecoration: "none" }}>
            FURNITURE
          </Link>
          {location.pathname.startsWith("/furniture") && <hr />}
        </li>

        <li>
          <Link to="/electronics" className="nav-link" style={{ textDecoration: "none" }}>
            ELECTRONICS
          </Link>
          {location.pathname.startsWith("/electronics") && <hr />}
        </li>

        <li>
          <Link to="/beauty" className="nav-link" style={{ textDecoration: "none" }}>
            BEAUTY
          </Link>
          {location.pathname.startsWith("/beauty") && <hr />}
        </li>

        {/* New Family Feature */}
        <li>
          <Link to="/family" className="nav-link" style={{ textDecoration: "none" }}>
            FAMILY CART
          </Link>
          {location.pathname.startsWith("/family") && <hr />}
        </li>

      </ul>

      <div className="nav-login-cart">

        {isAuthenticated ? (
          <div className="nav-auth">
            <span className="nav-icon-badge nav-profile-icon" title={user?.name || "Profile"}>
              <svg
                className="nav-user-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
                <path
                  d="M4 20c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="nav-greeting">Hi, {user?.name?.split(" ")[0]}</span>
            <button className="nav-logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="nav-auth">
            <Link to="/signup">
              <button
                className={
                  location.pathname === "/signup"
                    ? "nav-auth-btn nav-signup-btn nav-auth-btn-active"
                    : "nav-auth-btn nav-signup-btn"
                }
              >
                <span className="nav-icon-badge">
                  <svg
                    className="nav-user-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
                    <path
                      d="M4 20c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                Sign Up
              </button>
            </Link>

            <Link to="/login">
              <button
                className={
                  location.pathname === "/login"
                    ? "nav-auth-btn nav-login-btn nav-auth-btn-active"
                    : "nav-auth-btn nav-login-btn"
                }
              >
                Login
              </button>
            </Link>
          </div>
        )}

        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>

        <div className="nav-cart-count">
          {getTotalCartItems()}
        </div>

      </div>
    </div>
  );
};

export default Navbar;