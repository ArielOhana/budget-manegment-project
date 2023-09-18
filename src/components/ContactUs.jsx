import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../style/ContactUs.css";
import NavBar from "./NavBar";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <NavBar />
      <div className="contact-us-container">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
          <TextField 
              required
              label="Name"
              sx={{backgroundColor: '#FFFFFF', borderRadius: '7%'}}
            />
          </div>
          <div>
          <TextField 
              required
              label="Email"
              sx={{backgroundColor: '#FFFFFF', borderRadius: '7%'}}
            />
          </div>
          <div>
          <TextField 
              required
              label="Message"
              sx={{backgroundColor: '#FFFFFF', borderRadius: '7%'}}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
