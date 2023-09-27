import "../style/NavBar.css";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navbarIcon from "../../images/navbar-icon.png"
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContactUs from "./ContactUs";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Link onClick={handleOpen}>Contact Us</Link>
<Modal
  open={open}
  onClose={handleClose}
>
  <Box sx={style}>
     <ContactUs/>

  </Box>
</Modal>
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
