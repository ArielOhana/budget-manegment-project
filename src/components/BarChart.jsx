import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Salary", "Expenses", "Margin"],
  ["09/2023", 12000, 8000, 12000 - 8000],
  ["10/2023", 12000, 4500, 12000 - 4500],
  ["11/2023", 12000, 6000, 12000 - 6000],
];

export const options = {
  chart: {
    title: "My Budget",
    subtitle: "Salary, Expenses, and Profit",
  },
};

export default function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="500px"
      data={data}
      options={options}
    />
  );
}
