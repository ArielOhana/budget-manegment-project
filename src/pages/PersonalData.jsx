import { UserContext } from "../App";
import { useContext, useEffect, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InnerNavBar from "../components/InnerNavBar";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PersonalData = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext); 

  useEffect(() => {
    if (!user.UserName) {
      navigate("/error");
    } else {
      console.log("User is logged in:", user);
    }
  }, [user, navigate]); 

  return (
    <>
      <InnerNavBar>
        <li>
          <NavLink to="/editprofile">Edit Profile</NavLink>
        </li>
        <li>
          <NavLink to="/plans">Plan Options</NavLink>
        </li>
        <li>
          <NavLink to="/">Log Out</NavLink>
        </li>
      </InnerNavBar>
      <h1>Personal Data</h1>
    </>
  );
};

export default PersonalData;