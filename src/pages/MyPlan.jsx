import React from "react";
import "../style/MyPlan.css";
import InnerNavBar from "../components/InnerNavBar";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../App";

export default function MyPlan() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (!user.UserName) {
      navigate("/error");
    }
  }, [user, navigate]);

  const handleNavigate = (price) => {
    navigate("/payment", { state: { price } });
  };

  return (
    <div className="plans-container">
      <InnerNavBar>
        <li>
          <NavLink to="/editprofile">Edit Profile</NavLink>
        </li>
        <li>
          <NavLink to="/budgetinfo">Budget Info</NavLink>
        </li>
        <li>
          <NavLink to="/">Log Out</NavLink>
        </li>
      </InnerNavBar>
      <header>
        <h1>Our Plans</h1>
      </header>
      <div>
        <section class="pricing-container">
          <div class="pricing container-1">
            <h2>Basic</h2>
            <p class="price-1">
              $ 9.99 <h3>per Month</h3>
            </p>
            <ul>
              <hr />
              <li> Personal Data Information</li>
              <hr />
              <li> 2 Users Allowed</li>
              <hr />
            </ul>
            <button onClick={() => handleNavigate(9.99)}>Buy Now</button>
          </div>
          <div class="pricing container-2">
            <h2>Professional</h2>
            <p class="price-2">
              $ 14.99<h3>per Month</h3>
            </p>
            <ul>
              <hr />
              <li>Online Help 6 days a week</li>
              <hr />
              <li> 5 Users Allowed</li>
              <hr />
            </ul>
            <button onClick={() => handleNavigate(14.99)}>Buy Now</button>
          </div>
          <div class="pricing container-3">
            <h2>Master</h2>
            <p class="price-3">
              $ 34.99<h3>per Month</h3>
            </p>
            <ul>
              <hr />
              <li>Personal Data analyst</li>
              <hr />
              <li>Individual retirment plans</li>
              <hr />
            </ul>
            <button onClick={() => handleNavigate(34.99)}>Buy Now</button>
          </div>
        </section>
      </div>
    </div>
  );
}
