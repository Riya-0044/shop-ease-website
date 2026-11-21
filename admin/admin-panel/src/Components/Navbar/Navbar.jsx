import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />
        <h2>SHOPEASE Admin</h2>
      </div>

      <button className="logout-btn">Logout</button>
    </div>
  );
};

export default Navbar;