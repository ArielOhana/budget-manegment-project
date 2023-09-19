import "../style/Register.css";
import statsimg from "../../images/Statistic-img.png";
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {

    const [user, setUser] = React.useState({});
    const [flexDirection, setFlexDirection] = React.useState("row"); // Default value
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const navigate = useNavigate();
  
    const onSubmit = (data) => {
      data.setted = true;
      setUser(data);
  
      let users = JSON.parse(localStorage.getItem("users")) || [];
  
      const isExists = users.some(
        (element) => element.UserName === data.UserName && element.Password === data.Password
      );
  
      if (isExists) {
        alert("Signed In Successfully");
        setFlexDirection("row-reverse"); // Update flex direction

      } else {
        alert("Something is wrong try again or sign up");
      }
    };
  
    return (
      <>
        <div id="Main" style={{ flexDirection: flexDirection }}>
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
                <h1 style={{ marginTop: "50px" }}>Login</h1>
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
                  id="Password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  defaultValue={user.Password ? user.Password : ""}
                  {...register("Password")}
                  sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
                />
  <div style={{display:'flex', justifyContent:'space-around', width:'100%'}}>
                <Button variant="contained"
                  type="submit"
                  sx={{ mt: 1,  /* margin top */ }}
                >
                  Sign In
                </Button>
                <Link to="../register">    <Button
                  type="submit"
                  sx={{ mt: 1, border: "2px solid" /* margin top */ }}
                >
                  Register
                </Button>
                </Link>
                </div>
              </div>
             
            </Box>
            
          </div>
          <img id="statsimg" src={statsimg} alt="No Image found" />
        </div>
      </>
    );
  };
  export default Login;
  