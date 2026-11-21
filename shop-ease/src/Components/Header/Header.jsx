import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../Assests/logo.png";

const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <div className="header-row">
          <div className="logo-section">
        <img src={logo} alt="" />
        <p>SHOPEASE</p>
       
      </div>

        
        
          <div className="header-search">

        
        

        </div>

            

            

          
        </div>
      </div>
    </header>
  );
};

export default Header;