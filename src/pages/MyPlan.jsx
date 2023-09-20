import React from "react";
import "../style/MyPlan.css";
import InnerNavBar from "../components/InnerNavBar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../App";

export default function MyPlan() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext); // Retrieve context data here
 

  useEffect(() => {
    if (!user.UserName) {
      navigate("/error");
    } 
  }, [user, navigate]);
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
              <span class="dollar-sign"></span>$ 9.99
            </p>
            <ul>
              <hr />
              <li> Personal Data Information</li>
              <hr />
              <li> 2 Users Allowed</li>
              <hr />
            </ul>
            <Link to="/payment">
              <button>Buy Now</button>
            </Link>
          </div>
          <div class="pricing container-2">
            <h2>Professional</h2>
            <p class="price-2">
              {" "}
              <span class="dollar-sign"></span>$ 19.99
            </p>
            <ul>
              <hr />
              <li>Online Help 6 days a week</li>
              <hr />
              <li> 5 Users Allowed</li>
              <hr />
            </ul>
            <Link to="/payment">
              <button>Buy Now</button>
            </Link>{" "}
          </div>
          <div class="pricing container-3">
            <h2>Master</h2>
            <p class="price-3">
              <span class="dollar-sign"></span>$ 34.99
            </p>
            <ul>
              <hr />
              <li>Personal Data analyst</li>
              <hr />
              <li>Individual retirment plans</li>
              <hr />
            </ul>
            <Link to="/payment">
              <button>Buy Now</button>
            </Link>{" "}
          </div>
        </section>
      </div>
    </div>
  );
}
