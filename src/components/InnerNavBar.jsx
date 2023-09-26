import "../style/InnerNavBar.css";
import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";
import Avatar from "@mui/material/Avatar";

export default function InnerNavBar({ children }) {
  const { user, setUser } = useContext(UserContext);

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
        <div className="inner-navbar-right-container">
          <div className="inner-navbar-right">{children}</div>
          <Avatar
            src={`../../images/avatar-images/avatar-${user.avatarId}.png`}
          />
        </div>
      </ul>
    </div>
  );
}
