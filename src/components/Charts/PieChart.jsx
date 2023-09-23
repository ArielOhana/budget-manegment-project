// PieChart.jsx
import React, { useEffect, useContext, useState } from "react";
import { Chart } from "react-google-charts";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function PieChart() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([["Outcome", "Amount"]]);

  useEffect(() => {
    if (!user.UserName) {
      navigate("/error");
    } else {
      // Simulate data loading
      setTimeout(() => {
        setIsLoading(false);
        let totalcost = 0;
        let newData = [["Outcome", "Amount"]];

        user.events?.forEach((event) => {
          const title = event?.title;
          const amount = Number(event?.ammount) || 0;
          totalcost = totalcost + amount;
          newData.push([title, amount]);
        });

        if (user.events && user.events.length > 1) {
          newData.push(["Other", 0]);
        }

        totalcost = totalcost + Number(user?.regularexpenses);

        if (user?.events && user?.monthlyincome >= totalcost) {
          newData.push([`Regular Expenses: ${user?.regularexpenses}`, Number(user?.regularexpenses)]);
          newData.push([`Margin: ${user?.monthlyincome - totalcost}`, Number(user?.monthlyincome) - totalcost]);
        } else {
          newData = [["Outcome", "Amount"], [`Monthly Income: ${user?.monthlyincome}`, Number(user?.monthlyincome)], [`Monthly Outcome: ${totalcost}`, Number(totalcost)]];
        }

        setData(newData);
      }, 500); // Simulate loading time
    }
  }, [user, navigate]);

  return (
    <div className="budget-pie-chart">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Chart
          chartType="PieChart"
          width="100%"
          height="450px"
          data={data}
          options={{ title: `My Budget: ${user?.monthlyincome}`, is3D: true }}
        />
      )}
    </div>
  );
}
