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
const Login = () => {
    const { user, setUser } = useContext(UserContext);
  
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
        (element) => (element.UserName === data.UserName && element.Password === data.Password) ? setTrue(element) : false

      );
  
      if (isExists) {
        alert("Signed In Successfully");
        navigate("/personaldata")
     
      } else {
        alert("Something is wrong try again or sign up");
      }
    };
    
    function setTrue(element)
    {
        setUser(element);
        return true;
    }

  
    return (
      <>
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
                  sx={{ mt: 1 }}
                >
                  Sign In
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
            <Link to="../register">    <Button
                  type="submit"
                  sx={{ mt: 1, border: "2px solid" /* margin top */ }}
                >
                  Register
                </Button>
                </Link>
            </div>
          </div>
          <img id="statsimg" src={statsimg} alt="No Image found" />
        </div>
      </>
    );
  };
  export default Login;
  