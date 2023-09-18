import '../style/App.css'
import { Link, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";


function App() {

  return (
    <><div>
       <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/login"}>login</Link>
          </li>
          <li>
            <Link to={"/register"}>register</Link>
          </li>
        </ul>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route></Route>
      </Routes>
      </div>
    </>
  )
}

export default App
