import { UserContext } from "../App";
import { useContext } from "react";
const EditProfile = () => {
    const { user, setUser } = useContext(UserContext);
  console.log(user)
    return(
        <>
        <h1>Edit Profile</h1>
        </>
    )
}
export default EditProfile;
