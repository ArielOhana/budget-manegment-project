import { Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
export const UserContext = createContext();
import "../src/style/App.css";

//Route Imports
import ContactUs from "./components/ContactUs";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PersonalData from "./pages/PersonalData";
import EditProfile from "./pages/EditProfile";
import NoPage from "./pages/NoPage";
import Payment from "./pages/Payment";
import MyPlan from "./pages/MyPlan";
import NoPage from "./pages/NoPage";


function App() {
  const [user,setUser] = useState({})
  return (
    <div>
       <UserContext.Provider value={{user,setUser }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/personaldata" element={<PersonalData />}></Route>
        <Route path="/editprofile" element={<EditProfile />}></Route>
        <Route path="/payment" element={<Payment />} />
        <Route path="/plans" element={<MyPlan />} />
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
