import React, { useEffect, useContext, useState } from "react";
import { Chart } from "react-google-charts";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import AtomicSpinner from 'atomic-spinner'

export default function BarChart() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([["Outcome", "Amount"]]);
  const date = new Date();
  useEffect(() => {
    if (!user.UserName) {
      navigate("/error");
    } else {
      // Simulate data loading
      setTimeout(() => {
        setIsLoading(false);
        let newData = CalcMonthAndMargin();
        setData(newData);
      }, 500); // Simulate loading time
    }
  }, [user, navigate]);
  function extractMonthFromDate(dateString) {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return month;
  }
  
function CalcMonthAndMargin()
{
  let lastMonth = [getMonthName(date.getMonth()),Number(user.monthlyincome ? user.monthlyincome : 0),Number(user.regularexpenses ? user.regularexpenses : 0),0];
  let currentMonth = [getMonthName(date.getMonth() + 1),Number(user.monthlyincome ? user.monthlyincome : 0),Number(user.regularexpenses ? user.regularexpenses : 0),0];
  let nextMonth = [getMonthName((date.getMonth() + 2) % 11) ,Number(user.monthlyincome ? user.monthlyincome : 0),Number(user.regularexpenses ? user.regularexpenses : 0),0]; //Moudle to make sure it's not extends above twelve months
  user.events?.forEach((event) => {
    if (extractMonthFromDate(event.start) == date.getMonth()){
    
    const amount = Number(event?.ammount) || 0;
    lastMonth[2] =Number(Number(lastMonth[2]) + Number(amount));
  }
  if (extractMonthFromDate(event.start) == date.getMonth()+ 1){
    
    const amount = Number(event?.ammount) || 0;
    currentMonth[2] = Number(Number(currentMonth[2]) + Number(amount));
  }
  if (extractMonthFromDate(event.start) == (date.getMonth() + 2) % 11){
    
    const amount = Number(event?.ammount) || 0;
    nextMonth[2] = Number(Number(nextMonth[2]) + Number(amount));
  }});
  lastMonth[3] = lastMonth[1] - lastMonth[2]; 
  currentMonth[3] = currentMonth[1] - currentMonth[2]; 
  nextMonth[3] = nextMonth[1] - nextMonth[2]; 
return [["Month", "Salary", "Expenses", "Margin"], lastMonth,currentMonth,nextMonth]

}
function getMonthName(monthNumber) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (monthNumber >= 1 && monthNumber <= 12) {
    return months[monthNumber -1]; 
  } else {
    return "Invalid Month";
  }
}

  return (
    <div className="budget-bar-chart">
        {isLoading ? (
          <div>
          <h1  style={{width: '100%',display:'flex',justifyContent:'center'}}>Loading Bar Chart</h1>
            <div style={{width: '100%', height:'80vh', display:'flex', justifyContent:"center"}}>
            <AtomicSpinner nucleusParticleFillColor={'#220e22'} displayElectronPaths={false} electronPathCount={4} electronsPerPath={15} electronColorPalette={[ '#720e9e', `#AA44AE`, `#220e22` ]} atomSize={500} />
              </div>
              </div>
      ) : (
        <Chart
        chartType="Bar"
        width="100%"
        height="500px"
        data={data}
        options={{
          chart: {
            title: "My Budget",
            subtitle: "Salary, Expenses, and Profit",
          },
        }}
      />
      )}
      
    </div>
  );
}
