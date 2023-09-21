import { UserContext } from "../App";
import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InnerNavBar from "../components/InnerNavBar";

const EditProfile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (!user.UserName) {
      navigate("/error");
    }
  }, [user, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("User Information Saved");
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

  return (
    <>
      <InnerNavBar>
        <li>
          <NavLink to="/personaldata">Personal Data</NavLink>
        </li>
        <li>
          <NavLink to="/budgetinfo">Budget Info</NavLink>
        </li>
        <li>
          <NavLink to="/">Log out</NavLink>
        </li>
      </InnerNavBar>
      <h1 style={{ display: "flex", width: "100vw", justifyContent: "center" }}>
        Edit Profile
      </h1>
      <br />
      <div className="All-div">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)} 
        >
          <div
            className="UnChangeable-div"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "40%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                required
                id="adress"
                label="adress"
                defaultValue={user.adress ? user.adress : ""}
                {...register("adress")}
                sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
              />
              <TextField
                required
                id="state"
                type="text"
                label="state"
                defaultValue={user.state ? user.state : ""}
                {...register("state")}
                sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
              />
              <TextField
                required
                id="phoneNumber"
                label="Phone Number"
                type="tel"
                defaultValue={user.phoneNumber ? user.phoneNumber : ""}
                {...register("phoneNumber")}
                sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "40%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                required
                id="UserName"
                label="User Name"
                disabled={true}
                defaultValue={user.UserName ? user.UserName : ""}
                sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
              />
              <TextField
                required
                id="Email"
                type="email"
                label="Email"
                disabled={true}
                defaultValue={user.Email ? user.Email : ""}
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
                sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              type="submit"
              sx={{ mt: 1 }}
            >
              Save
            </Button>
          </div>
        </Box>
      </div>
    </>
  );
};

export default EditProfile;
