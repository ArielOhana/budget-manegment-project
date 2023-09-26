import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../style/ContactUs.css";
import { Link } from "react-router-dom";

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
      <div className="contact-us-container">
        <div className="contact-us-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="inputs-container">
              <div className="text-field">
                <TextField
                  required
                  label="Name"
                  sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
                />
              </div>
              <div className="text-field">
                <TextField
                  required
                  label="Email"
                  sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
                />
              </div>
            </div>
            <div className="text-field">
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here"
                required
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                cols="60"
                style={{
                  backgroundColor: "#FFFFFF",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div className="btn-container">
              <Button
                type="submit"
                sx={{ mt: 1, border: "2px solid", margin: "20px" }}
              >
                Submit
              </Button>
              <Link to="/">
                <Button
                  type="submit"
                  sx={{ mt: 1, border: "2px solid", margin: "20px" }}
                >
                  Home
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
