import { UserContext } from "../App";
import { useContext, useEffect } from "react";
import InnerNavBar from "../components/InnerNavBar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

const EditProfile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext); // Retrieve context data here
 

  useEffect(() => {
    if (!user.UserName) {
      navigate("/error");
    } else {
      console.log("User is logged in:", user);
    }
  }, [user, navigate]); // Include user and navigate in the dependency array
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    alert("Saved!")
    console.log(data);
  }
  return (
    <>
      <InnerNavBar>
        <li>
          <NavLink to="/personaldata">Personal Data</NavLink>
        </li>
        <li>
          <NavLink to="/plans">Plan Options</NavLink>
        </li>
        <li>
          <NavLink to="/">Log out</NavLink>
        </li>
      </InnerNavBar>
      <h1>Edit Profile</h1>
      <div className="All-div">
      <div className="UnChangeable-div">
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
              }}  >
              <TextField
                required
                id="UserName"
                label="User Name"
                disabled={true}
                defaultValue={user.UserName ? user.UserName : ""}
                {...register("UserName")}
                sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
              />
              <TextField
                required
                id="Email"
                type="email"
                label="Email"
                disabled={true}

                defaultValue={user.Email ? user.Email : ""}
                {...register("Email")}
                sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
              />
              <TextField
                required
                id="Password"
                label="Password"
                type="text"
                disabled={true}

                autoComplete="current-password"
                defaultValue={user.Password ? user.Password : ""}
                {...register("Password")}
                sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
              />
 <div style={{display:'flex', justifyContent:'space-around', width:'100%'}}>
                </div>
              </div>
              <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}  >
              <TextField
                required
                id="Name"
                label="Name"
                disabled={true}
                defaultValue={user.Name ? user.Name : ""}
                {...register("Name")}
                sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
              />
              <TextField
                required
                id="Email"
                type="email"
                label="Email"
                disabled={true}

                defaultValue={user.Email ? user.Email : ""}
                {...register("Email")}
                sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
              />
              <TextField
                required
                id="Password"
                label="Password"
                type="text"
                disabled={true}

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
                  Save
                </Button>
                
                </div>
              </div>
             
          </Box>
          </div>
      </div>
    </>
  );
};

export default EditProfile;