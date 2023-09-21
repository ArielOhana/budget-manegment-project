import React from "react";
import { Chart } from "react-google-charts";
import { UserContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function PieChart() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  let data = [["Outcome", "Amount"]];
  const date = new Date();
  user.events?.forEach((event) => {
    if (extractMonthFromDate(event.start) == date.getMonth() + 1) {
      const title = event?.title;
      const amount = Number(event?.ammount) || 0;

      data.push([title, amount]);
    }
  });
  function extractMonthFromDate(dateString) {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    return month;
  }

  if (user.events && user.events.length > 1) {
    data.push(["Other", 0]);
  }
  return (
    <div className="budget-pie-chart">
      <Chart
        chartType="PieChart"
        width="100%"
        height="450px"
        data={data}
        options={{ title: `My Budget: ${user?.monthlyincome}`, is3D: true }}
      />
    </div>
  );
}
