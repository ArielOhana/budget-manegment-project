import { useEffect, useContext } from "react";
import { UserContext } from "../App";
import { NavLink, useNavigate } from "react-router-dom";
import "../style/PersonalData.css";
import InnerNavBar from "../components/InnerNavBar";
import Footer from "../components/Footer";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";

const PersonalData = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (!user.UserName) {
      navigate("/error");
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
      <div className="budget-pie-chart-container">
        <PieChart />
      </div>
      <div className="budget-bar-chart">
        <BarChart />
      </div>
      <Footer />
    </div>
  );
};

export default PersonalData;
