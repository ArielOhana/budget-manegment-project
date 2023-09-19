import { UserContext } from "../App";
import { useContext } from "react";
import InnerNavBar from "../components/InnerNavBar";
const PersonalData = () => {
    const { user, setUser } = useContext(UserContext);
    console.log(user)
      return(
          <>
          <InnerNavBar></InnerNavBar>
          <h1>Personal Data</h1>
          </>
    )
}
export default PersonalData;
