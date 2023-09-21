import React from "react";
import { Chart } from "react-google-charts";
import { UserContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function PieChart() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  let totalcost = 0;
  let data = [["Outcome", "Amount"]];

  const date = new Date();
  user.events?.forEach((event) => {
    if (extractMonthFromDate(event.start) == date.getMonth() + 1) {
      const title = event?.title;
      const amount = Number(event?.ammount) || 0;
      totalcost = totalcost + amount;
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
   totalcost = totalcost + Number(user?.regularexpenses)
  if (user.events && user.events.length > 0 && (Number(user?.monthlyincome) - totalcost - Number(user?.regularexpenses) > 0) ) {
    data.push([`Regular Expenses: ${ user?.regularexpenses}`, Number(user?.regularexpenses)]);
    data.push([`Margin: ${ user?.monthlyincome - totalcost}`, Number(user?.monthlyincome) - totalcost]);
  }
  else
  {
    data=[["Outcome", "Amount"], [`Monthly Income: ${ user?.monthlyincome}`, Number(user?.monthlyincome)], [`Monthly Outcome: ${totalcost}`, Number(totalcost)]];
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
