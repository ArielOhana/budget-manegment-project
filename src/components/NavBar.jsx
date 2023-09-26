import "../style/NavBar.css";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navbarIcon from "../../images/navbar-icon.png"

export default function NavBar() {
  return (
    <div className="navbar-container">
      <ul className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <div className="navbar-left-img">
              <img src={navbarIcon} alt="Navbar icon" />
            </div>
            <div className="navbar-left-title">
              <h2>BudgetBuddy</h2>
            </div>
          </Link>
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
