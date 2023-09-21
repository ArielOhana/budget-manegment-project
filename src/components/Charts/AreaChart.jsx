import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Salary", "Expenses"],
  ["September", 12000, 4000],
  ["October", 13000, 4600],
  ["November", 12000, 11200]
];

export const options = {
  title: "Income/Outcome",
  hAxis: { title: "Month", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "60%", height: "70%" },
};

export default function AreaChart() {
  return (
    <div className="budget-area-chart">
      <Chart
        chartType="AreaChart"
        width="100%"
        height="450px"
        data={data}
        options={options}
      />
    </div>
  );
}
