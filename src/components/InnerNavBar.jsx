import "../style/InnerNavBar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import navbarIcon from "../../images/navbar-icon.png";

import avatar1 from "../../images/avatar-images/avatar-1.png";
import avatar2 from "../../images/avatar-images/avatar-2.png";
import avatar3 from "../../images/avatar-images/avatar-3.png";
import avatar4 from "../../images/avatar-images/avatar-4.png";
import avatar5 from "../../images/avatar-images/avatar-5.png";
import avatar6 from "../../images/avatar-images/avatar-6.png";
import avatar7 from "../../images/avatar-images/avatar-7.png";
import avatar8 from "../../images/avatar-images/avatar-8.png";
import avatar9 from "../../images/avatar-images/avatar-9.png";
import avatar10 from "../../images/avatar-images/avatar-10.png";
import avatar11 from "../../images/avatar-images/avatar-11.png";
import avatar12 from "../../images/avatar-images/avatar-12.png";

export default function InnerNavBar({ children }) {
  const { user, setUser } = useContext(UserContext);
  const avatars = [
    { id: 1, src: String(avatar1) },
    { id: 2, src: String(avatar2) },
    { id: 3, src: String(avatar3) },
    { id: 4, src: String(avatar4) },
    { id: 5, src: String(avatar5) },
    { id: 6, src: String(avatar6) },
    { id: 7, src: String(avatar7) },
    { id: 8, src: String(avatar8) },
    { id: 9, src: String(avatar9) },
    { id: 10, src: String(avatar10) },
    { id: 11, src: String(avatar11) },
    { id: 12, src: String(avatar12) },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    console.log(!mobileMenuOpen);
  };


  return (
  
    <div className={`inner-navbar-container ${mobileMenuOpen ? "open" : ""}`}>
      <div className="mobile-dropdown-button">
        <button onClick={toggleMobileMenu}>☰</button>
      </div>
      <ul className="inner-navbar">
        <div className="inner-navbar-left">
          <Link to="/">
            <div className="inner-navbar-left-img">
              <img src={navbarIcon} alt="Navbar icon" />
            </div>
            <div className="inner-navbar-left-title">
              <h2>BudgetBuddy</h2>
            </div>
          </Link>
        </div>
        <div className="inner-navbar-right-container">
          <div className="inner-navbar-right">{children}</div>
          <Link to="/editprofile">
            {" "}
            <Avatar
              alt={String(avatar1)}
              src={String(avatars[user.avatarId - 1]?.src)}
            />
          </Link>
        </div>
      </ul>
      {mobileMenuOpen && (
        <div className={`inner-navbar-right-dropdown ${mobileMenuOpen ? "open" : ""}`} >
          <ul>
            <li>
              <Link to="/personaldata">Personal Data</Link>
            </li>
            <li>
              <Link to="/budgetinfo">Budget Info</Link>
            </li>
            <li>
              <Link to="/">Log Out</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
