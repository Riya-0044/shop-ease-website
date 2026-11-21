import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">

      <NavLink to="/" className="sidebar-item">
        Dashboard
      </NavLink>

      <NavLink to="/add-product" className="sidebar-item">
        Add Product
      </NavLink>

      <NavLink to="/product-list" className="sidebar-item">
        Product List
      </NavLink>

      <NavLink to="/orders" className="sidebar-item">
        Orders
      </NavLink>

      {/* New Family Page */}
      <NavLink to="/families" className="sidebar-item">
         Families
      </NavLink>

    </div>
  );
};

export default Sidebar;