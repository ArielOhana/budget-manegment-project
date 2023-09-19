import { UserContext } from "../App";
import { useContext } from "react";
const PersonalData = () => {
    const { user, setUser } = useContext(UserContext);
    console.log(user)
      return(
          <>
          <h1>Personal Data</h1>
          </>
    )
}
export default PersonalData;
