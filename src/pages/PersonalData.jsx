import { UserContext } from "../App";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Chart } from "react-google-charts";
import "../style/PersonalData.css";
import InnerNavBar from "../components/InnerNavBar";

// export const data = [
//   ["Outcome", "Amount"],
  
//   ["Work", 11],
//   ["Eat", 2],
//   ["Commute", 2],
//   ["Watch TV", 2],
//   ["Sleep", 7],
// ];

// let income = JSON.parse(localStorage.getItem("totalincome")) || [];


const PersonalData = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  let data = [["Outcome", "Amount"]];
  const date = new Date();
  user.events?.forEach((event) => {
    if(extractMonthFromDate(event.start) == (date.getMonth() +1))
    {const title = event?.title;
    const amount = Number(event?.ammount) || 0;

    data.push([title, amount]);
  }});
  function extractMonthFromDate(dateString) {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return month;
  }
  
  // Ensure that the "Other" label is only added if there's more than one event
  if (user.events && user.events.length > 1) {
    data.push(["Other", 0]);
  }

  console.log(data);
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
          options={{title: `My Budget: ${user?.monthlyincome}`,
          is3D: true,}}
        />
      </div>
    </div>
  );
};

export default PersonalData;
