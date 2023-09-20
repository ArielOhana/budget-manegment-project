import { UserContext } from "../App";
import { useContext, useEffect } from "react";
import InnerNavBar from "../components/InnerNavBar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import AdjustCalendar from "../components/AdjustCalendar";

const BudgetInfo = () => {
  const navigate = useNavigate();
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
      parsedDate.getDate(),
    );
  
    user.events.push({
      id: user.events.length,
      title: data.title + ": " + data.ammount,
      start: formattedDate, // Use formattedDate here
      end: formattedDate,   // Use formattedDate here
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
          <TextField
            required
            id="date"
            label="Date"
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
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <TextField
            required
            id="familymembers"
            label="Family Members"
            type="number"
            defaultValue={user.familymembers ? user.familymembers : ""}
            {...register("familymembers")}
            sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
          />
          <TextField
            required
            id="totalincome"
            label="Total Income"
            type="number"
            defaultValue={user.totalincome ? user.totalincome : ""}
            {...register("totalincome")}
            sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
          />
          <TextField
            required
            color="error"
            id="regularoutcome"
            label="Regular Expenses"
            type="number"
            defaultValue={user.regularoutcome ? user.regularoutcome : ""}
            {...register("regularoutcome")}
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

      <AdjustCalendar />
    </>
  );
};
export default BudgetInfo;
