import InnerNavBar from "../components/InnerNavBar";
import { NavLink } from "react-router-dom";
import "../style/NoPage.css";

const NoPage = () => {
  return (
    <div className="error-container">
      <h1 className="animated-heading">Looks like you are out of luck!</h1>
      <h2 className="animated-subheading">Please try again</h2>
      <div className="btns">
        <div className="home-btn">
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <NavLink to="/">
              <span className="button-text">Home</span>
            </NavLink>
          </button>
        </div>
        <div className="login-btn">
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <NavLink to="/login">
              <span className="button-text">Login</span>
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};
export default NoPage;
