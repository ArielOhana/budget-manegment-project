// PersonalData.jsx
import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../App";
import { NavLink, useNavigate } from "react-router-dom";
import "../style/PersonalData.css";
import InnerNavBar from "../components/InnerNavBar";
import Footer from "../components/Footer";
import BarChart from "../components/Charts/BarChart";
import PieChart from "../components/Charts/PieChart";
import AreaChart from "../components/Charts/AreaChart";

const PersonalData = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (!user.UserName) {
      navigate("/error");
    } else {
      setTimeout(() => {
        setDataLoaded(true);
      }, 1000); // Simulate loading time
    }
  }, [user, navigate]);

  return (
    <div className="personal-info-container">
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
      {dataLoaded ? (
        <div className="pie-area-wrapper">
          <div className="budget-pie-chart-container">
            <PieChart />
          </div>
          <div className="budget-area-chart-container">
            <AreaChart />
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      {dataLoaded && (
        <div className="budget-bar-chart-container">
          <BarChart />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PersonalData;
