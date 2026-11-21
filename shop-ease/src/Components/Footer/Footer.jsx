

import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">

      <div className="footer-container">

        
        <div className="footer-column">
          <h4>ONLINE SHOPPING</h4>

          <Link to="/mens">Mens</Link>
<Link to="/womens">Womens</Link>
<Link to="/kids">Kids</Link>

<Link to="/beauty">Beauty Products</Link>
<Link to="/electronics">Electronics</Link>
<Link to="/furniture">Furniture</Link>
        </div>

        
        <div className="footer-column">
          <h4>CUSTOMER POLICIES</h4>

          <a href="/">Contact Us</a>
          <a href="/">FAQ</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Track Orders</a>
          <a href="/">Shipping</a>
          <a href="/">Cancellation</a>
          <a href="/">Return Policy</a>
          <a href="/">Privacy Policy</a>
        </div>

    
        <div className="footer-column">
          <h4>SHOPEASE FEATURES</h4>

          <p> Family Shopping Cart</p>
          <p> Review Summary</p>
          <p> Life Event Shopping Planner</p>

          <h4 className="footer-heading">KEEP IN TOUCH</h4>

          <div className="social-icons">
            <img src={instagram_icon} alt="Instagram" />
            <img src={pintester_icon} alt="Pinterest" />
            <img src={whatsapp_icon} alt="WhatsApp" />
          </div>
        </div>

        
        <div className="footer-column footer-right">

          <div className="feature-box">
            <span className="icon">✔</span>
            <p>
              <strong>100% ORIGINAL</strong><br />
              Products Guarantee
            </p>
          </div>

          <div className="feature-box">
            <span className="icon">↩</span>
            <p>
              <strong>Easy Returns</strong><br />
              Within 14 Days
            </p>
          </div>

        </div>

      </div>

      <hr />

      <div className="footer-logo">
        <img src={footer_logo} alt="SHOPEASE Logo" />
        <h1>SHOPEASE</h1>
      </div>

      <div className="footer-bottom">
        © 2026 SHOPEASE. All Rights Reserved.
      </div>

    </div>
  );
};

export default Footer;