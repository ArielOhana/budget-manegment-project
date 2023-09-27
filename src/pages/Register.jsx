import "../style/Register.css";
import statsimg from "../../images/Statistic-img.png";
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

const Register = () => {
    const { user, setUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if(data.Password === data.ConfirmPassword) {
    data.setted = true;
   

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const isExists = users.some(
      (element) => element.UserName === data.UserName
    );

    if (isExists) {
      toast("User already exists", {theme: "colored", type:"error"});
    } else {
        setUser(data);
      users.push(data);
      localStorage.setItem("users", JSON.stringify(users));
      navigate("/editprofile")
    }
  }
  else{
    toast("Please confirm password", {theme: "colored", type:"warning"});
  }
};

  return (
    <>
    <ToastContainer/>
      <div id="Main">
        <div id="Register-Main">
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
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 style={{ marginTop: "50px" }}>Register</h1>
              <TextField
                required
                id="UserName"
                label="User Name"
                defaultValue={user.UserName ? user.UserName : ""}
                {...register("UserName")}
                sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
              />
              <TextField
                required
                id="Email"
                type="email"
                label="Email"
                defaultValue={user.Email ? user.Email : ""}
                {...register("Email")}
                sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
              />
              <TextField
                required
                id="Password"
                label="Password"
                type="password"
                autoComplete="current-password"
                defaultValue={user.Password ? user.Password : ""}
                {...register("Password")}
                sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
              />
              <TextField
                required
                id="Confirm-Password"
                label="Confirm Password"
                type="password"
                {...register("ConfirmPassword")}
                sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
              />
 <div style={{display:'flex', justifyContent:'space-around', width:'100%'}}>
                <Button variant="contained"
                  type="submit"
                  sx={{ mt: 1,  /* margin top */ }}
                >
                  Sign up
                </Button>
                
                </div>
              </div>
             
          </Box>
           <div className="back-div">
            <Link to="../">    <Button
                  type="submit"
                  sx={{ mt: 1, border: "2px solid" /* margin top */ }}
                >
                  Home
                </Button>
                </Link>
            <Link to="../login">    <Button
                  type="submit"
                  sx={{ mt: 1, border: "2px solid" /* margin top */ }}
                >
                  Back to Login
                </Button>
                </Link>
            </div>
        </div>
        <img id="statsimg" src={statsimg} alt="No Image found" />
      </div>
    </>
  );
};

export default Register;
