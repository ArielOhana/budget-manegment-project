import "../style/NavBar.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <ul className="navbar">
        <div className="navbar-left">
          <NavLink to="/">
            <img src="/images/navbar-icon.png" alt="Navbar icon" />
          </NavLink>
        </div>
        <div className="navbar-right">
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
}
