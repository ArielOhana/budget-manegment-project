import { useEffect, useContext } from "react";
import { UserContext } from "../App";
import { NavLink, useNavigate } from "react-router-dom";
import "../style/PersonalData.css";
import InnerNavBar from "../components/InnerNavBar";
import Footer from "../components/Footer";
<<<<<<< HEAD
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import AreaChart from "../components/AreaChart";
=======
import BarChart from "../components/Charts/BarChart";
import PieChart from "../components/Charts/PieChart";
import AreaChart from "../components/Charts/AreaChart";
>>>>>>> c29b5bc4f9e9f4cfbca0e0b688ea5207e9a016b8

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
      <div className="pie-area-wrapper">
        <div className="budget-pie-chart-container">
          <PieChart />
        </div>
        <div className="budget-area-chart-container">
          <AreaChart />
        </div>
      </div>
      <div className="budget-bar-chart-container">
        <BarChart />
      </div>
      <Footer />
    </div>
  );
};

export default PersonalData;
