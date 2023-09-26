import { UserContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InnerNavBar from "../components/InnerNavBar";
import "../style/EditProfile.css";
import Avatar from "@mui/material/Avatar";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

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
    setUser({ ...user, ...data });
    UpdateLocalStorage({ ...user, ...data });
    toast("User Information Saved", { theme: "dark", type: "success"});
    
  };
  const UpdateLocalStorage = (element) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const targetIndex = users.findIndex(
      (user) => user.UserName === element.UserName
    );
    users[targetIndex] = element;
    localStorage.setItem("users", JSON.stringify(users));
  };

  const [selectedAvatar, setSelectedAvatar] = useState(user.avatarId);
  const avatars = [
    { id: 1, src: "../../images/avatar-images/avatar-1.png" },
    { id: 2, src: "../../images/avatar-images/avatar-2.png" },
    { id: 3, src: "../../images/avatar-images/avatar-3.png" },
    { id: 4, src: "../../images/avatar-images/avatar-4.png" },
    { id: 5, src: "../../images/avatar-images/avatar-5.png" },
    { id: 6, src: "../../images/avatar-images/avatar-6.png" },
    { id: 7, src: "../../images/avatar-images/avatar-7.png" },
    { id: 8, src: "../../images/avatar-images/avatar-8.png" },
    { id: 9, src: "../../images/avatar-images/avatar-9.png" },
    { id: 10, src: "../../images/avatar-images/avatar-10.png" },
    { id: 11, src: "../../images/avatar-images/avatar-11.png" },
    { id: 12, src: "../../images/avatar-images/avatar-12.png" },
  ];
  const handleAvatarClick = (avatarId) => {
    setSelectedAvatar(avatarId);
    setUser({ ...user, avatarId: avatarId });
    UpdateLocalStorage({ ...user, avatarId: avatarId });
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
          <NavLink to="/">Log Out</NavLink>
        </li>
      </InnerNavBar>
      <ToastContainer autoClose={1000} onClose={() => {
  setTimeout(() => {
    navigate("/personaldata");
  }, 1700); // Adjust the delay (in milliseconds) as needed
}} />
      <div className="All-div">
        <div className="avatar-div">
          <div className="avatars">
            {avatars.map((avatar) => (
              <Avatar
                key={avatar.id}
                className={
                  selectedAvatar === avatar.id ? "avatar-clicked" : "avatar"
                }
                src={avatar.src}
                onClick={() => handleAvatarClick(avatar.id)}
              />
            ))}
          </div>
        </div>
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
                width: "30%",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="UnChangeable-div-child"
            >
              <TextField
                required
                id="adress"
                label="Address"
                defaultValue={user.adress ? user.adress : ""}
                {...register("adress")}
                sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
              />
              <TextField
                required
                id="state"
                type="text"
                label="Country"
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
                width: "30%",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="UnChangeable-div-child"
            >
              <TextField
                required
                id="familymembers"
                type="number"
                label="Family Members"
                defaultValue={user.familymembers ? user.familymembers : ""}
                {...register("familymembers")}
                sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
              />
              <TextField
                required
                id="monthlyincome"
                type="number"
                label="Monthly Income"
                defaultValue={user.monthlyincome ? user.monthlyincome : ""}
                {...register("monthlyincome")}
                sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
              />
              <TextField
                required
                id="regularexpenses"
                label="Regular Expenses"
                type="number"
                defaultValue={user.regularexpenses ? user.regularexpenses : ""}
                {...register("regularexpenses")}
                sx={{ backgroundColor: "#FFFFFF", borderRadius: "7%" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="UnChangeable-div-child"
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
            <Button variant="contained" type="submit" sx={{ mt: 1 }}>
              Save
            </Button>
          </div>
        </Box>
      </div>
    </>
  );
};

export default EditProfile;
