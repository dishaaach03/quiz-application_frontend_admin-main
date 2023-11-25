import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
import "./Loginpage.css";

function Loginpage(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const{signIn}=UserAuth();
    const navigate=useNavigate();

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            await signIn(email,password)
            navigate('/quiz');
        }
        catch{
            console.log(e.message);
            alert(e.message);
        }
    }
    return(
        <div class="ad">
            <br/>
        <center>
        <div class="lp card shadow">
        <p class="mt-5"><h4><b>Admin</b></h4></p>
        <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter Email"
         onChange={(e)=>setEmail(e.target.value)} style={{width:'60%'}} class="m-3 form-control"/><br/>
        <input type="password" placeholder="Enter Password"
         onChange={(e)=>setPassword(e.target.value)}style={{width:'60%'}} class="m-3 form-control"/><br/>
            <button class="btn btn-outline-success mt-3 mb-4"><b>Log in</b></button><br/>
        </form>
        </div>
        </center>
        </div>
    )
}
export default Loginpage;