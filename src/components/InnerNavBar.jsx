import "../style/InnerNavBar.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function InnerNavBar({children}) {
  return (
    <div className="inner-navbar-container">
      <ul className="inner-navbar">
        <div className="inner-navbar-left">
          <Link to="/">
            <div className="inner-navbar-left-img">
              <img src="/images/navbar-icon.png" alt="Navbar icon" />
            </div>
            <div className="inner-navbar-left-title">
              <h2>BudgetBuddy</h2>
            </div>
          </Link>
        </div>
        <div className="inner-navbar-right">
        {children}
        </div>
      </ul>
    </div>
  );
}
