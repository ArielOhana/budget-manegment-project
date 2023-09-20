import InnerNavBar from "../components/InnerNavBar";
import { NavLink } from "react-router-dom";

const NoPage = () => {
  return (
    <>
      <InnerNavBar>
        <li>
          <NavLink to="/">Back Home</NavLink>
        </li>
      </InnerNavBar>
      
    </>
  );
};
export default NoPage;
