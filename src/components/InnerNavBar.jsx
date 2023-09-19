import "../style/InnerNavBar.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function InnerNavBar({children}) {
  return (
    <div className="navbar-container">
      <ul className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <div className="navbar-left-img">
              <img src="/images/navbar-icon.png" alt="Navbar icon" />
            </div>
            <div className="navbar-left-title">
              <h2>BudgetBuddy</h2>
            </div>
          </Link>
        </div>
        <div className="navbar-right">
        {children}
        </div>
      </ul>
    </div>
  );
}
