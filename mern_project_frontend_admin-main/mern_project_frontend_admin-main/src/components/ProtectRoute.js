import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const ProtectRoute=({children})=>{
    const {user}=UserAuth();
    if(!user){
        return <Navigate to="/"/>
    }
    return(children);

};
export default ProtectRoute;