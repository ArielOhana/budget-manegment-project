import { UserContext } from "../App";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Chart } from "react-google-charts";
import "../style/PersonalData.css";
import InnerNavBar from "../components/InnerNavBar";

export const data = [
  ["Outcome", "Amount"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Bathroom", 20],
  ["Watch TV", 2],
  ["Sleep", 7],
];

let income = JSON.parse(localStorage.getItem("totalincome")) || [];

export const options = {
  title: `My Budget: ${income}`,
  is3D: true,
};

const PersonalData = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  // useEffect(() => {
  //   if (!user.UserName) {
  //     navigate("/error");
  //   }
  // }, [user, navigate]);

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
      <div className="budget-pie-chart">
        <Chart
          chartType="PieChart"
          width="100%"
          height="450px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default PersonalData;
