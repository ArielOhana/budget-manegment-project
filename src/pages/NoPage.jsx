import { UserContext } from "../App";
import { useContext } from "react";
import InnerNavBar from "../components/InnerNavBar";
import { Link, NavLink } from "react-router-dom";

const NoPage = () => {
    const { user, setUser } = useContext(UserContext);
    console.log(user)
      return(
          <>
          <InnerNavBar>
        <li>
        <NavLink to="/">Log out</NavLink>
        </li>
         </InnerNavBar>
         <div style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center', width:'100vw',height:'80vh'}}>
            <h1 style={{fontSize:'8rem'}}>404</h1>
            <h4 style={{fontSize:'3rem'}}>What you trying to do? go back.</h4>
            </div>
          
          </>
    )
}
export default NoPage;
