import "../style/NavBar.css";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navbarIcon from "../../images/navbar-icon.png"
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ContactUs from "./ContactUs";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  const autoClose = () => setOpen(false);;
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false);     toast("Message sent", {theme: "colored", type:"success"});
}

  return (
    <div className="navbar-container">
      <ToastContainer />
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
  onClose={autoClose}
>
  <Box sx={style}>
     <ContactUs handleClose={handleClose}/>

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
