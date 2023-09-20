import { UserContext } from "../App";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InnerNavBar from "../components/InnerNavBar";
import { NavLink } from "react-router-dom";

const PersonalData = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext); 

  useEffect(() => {
    if (!user.UserName) {
      navigate("/error");
    } 
  }, [user, navigate]); // Include user and navigate in the dependency array

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