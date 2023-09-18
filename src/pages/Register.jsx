import "../style/Register.css"
import statsimg from "../images/Statistic-img.png"
import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
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
  
      // Check if user exists
      const isExists = users.some((element) => element.FirstName === data.FirstName);
  
      if (isExists) {
        alert("User already exists");
      } else {
        users.push(data);
        localStorage.setItem("users", JSON.stringify(users));
        alert("User connected successfully");
        setFlexDirection("row-reverse"); // Update flex direction
      }
    };
  

    return (
    <>
    <div id="Main" style={{ flexDirection: flexDirection }}>
    <div id="Register-Main" >
    <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div style={{display:'flex', flexDirection:'column', width:'100%', justifyContent:'center', alignItems:'center'}}>
          <h1 style={{ marginTop: "50px" }}>Register</h1>
            <TextField 
              required
              id="FirstName"
              label="First Name"
              defaultValue={user.FirstName? user.FirstName:''}
              {...register("FirstName")}
              sx={{backgroundColor: '#FFFFFF', borderRadius: '7%'}}

             
            />
            <TextField
              required
              id="LastName"
              label="Last Name"
              defaultValue={user.LastName? user.LastName:''}

              {...register("LastName")}
              sx={{backgroundColor: '#FFFFFF', borderRadius: '7%'}}
            />
            <TextField
              required
              id="Email"
              label="Email"
              defaultValue={user.Email? user.Email:''}

              {...register("Email")}
              sx={{backgroundColor: '#FFFFFF', borderRadius: '7%'}}

            />
            <TextField
              required
              id="Password"
              label="Password"
              type="password"
              autoComplete="current-password"
              defaultValue={user.Password? user.Password:''}

              {...register("Password")}
              sx={{backgroundColor: '#FFFFFF', borderRadius: '7%'}}

            />
         
          <Button type="submit"  sx={{ mt: 1, border: '2px solid' /* margin top */}}>Sign Up</Button>
          </div>
        </Box>
    </div>
    <img id="statsimg" src={statsimg} alt="No Image found" />
    </div>
    </>
    );
  };
  
  export default Register;
  