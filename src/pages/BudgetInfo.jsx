import { UserContext } from "../App";
import { useContext, useEffect } from "react";
import InnerNavBar from "../components/InnerNavBar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import AdjustCalendar from "../components/AdjustCalendar";
import "../style/BudgetInfo.css"
import Footer from "../components/Footer";

const BudgetInfo = () => {
  const navigate = useNavigate();
  const date = new Date();

  const { user, setUser } = useContext(UserContext); // Retrieve context data here
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Saved!");
    setUser({ ...user, ...data });
    UpdateLocalStorage({ ...user, ...data });
  };
  const UpdateLocalStorage = (element) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const targetIndex = users.findIndex(
      (user) => user.UserName === element.UserName
    );
    users[targetIndex] = element;
    localStorage.setItem("users", JSON.stringify(users));
  };
  const AddExpense = (data) => {
    alert("Saved!");
    if (!user.events) {
      user.events = [];
    }
    const dateString = data.date;
    const parsedDate = new Date(dateString);
    const formattedDate = new Date(
      parsedDate.getFullYear(),
      parsedDate.getMonth(),
      parsedDate.getDate()
    );

    user.events.push({
      id: user.events.length,
      title: data.title + ": " + data.ammount,
      start: formattedDate, // Use formattedDate here
      end: formattedDate, // Use formattedDate here
      ammount: data.ammount,
    });
    setUser(user);
    UpdateLocalStorage(user);
  };

  useEffect(() => {
    if (!user.UserName) {
      navigate("/error");
    }
  }, [user, navigate]);
  function TotalExpenses() {
    
    let total = 0;
    user.events?.map((event) => {
       if(extractMonthFromDate(event.start) == (date.getMonth() +1)) total += Number(event.ammount);
    });
    return total;
}
function extractMonthFromDate(dateString) {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return month;
  }
  return (
    <>
      <InnerNavBar>
        <li>
          <NavLink to="/personaldata">Personal Data</NavLink>
        </li>
        <li>
          <NavLink to="/editprofile">Edit Profile</NavLink>
        </li>
        <li>
          <NavLink to="/">Log out</NavLink>
        </li>
      </InnerNavBar>
      <h1 style={{ display: "flex", width: "100vw", justifyContent: "center" }}>
        Budget Info
      </h1>
      <br />

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        autoComplete="off"
        onSubmit={handleSubmit(AddExpense)}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <h3
            style={{
              display: "flex",
              width: "100vw",
              justifyContent: "center",
            }}
          >
            Popping Expenses
          </h3>
          <TextField
            required
            id="date"
            type="date"
            {...register("date")}
            sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
          />
          <TextField
            required
            id="title"
            label="Title"
            type="text"
            {...register("title")}
            sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
          />
          <TextField
            required
            id="ammount"
            label="Ammount"
            type="number"
            {...register("ammount")}
            sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
          />
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Button
            variant="contained"
            type="submit"
            sx={{ mt: 1 /* margin top */ }}
          >
            Save
          </Button>{" "}
        </div>
      </Box>
      <br />
      <h3
        style={{ display: "flex", width: "100vw", justifyContent: "center" }}
      >{`Total Expenses: ${TotalExpenses()}`}</h3>
      <AdjustCalendar />
      <Footer />
    </>
  );
};
export default BudgetInfo;
