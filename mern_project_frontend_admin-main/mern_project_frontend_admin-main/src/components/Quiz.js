import {useEffect, useState} from 'react';
import Axios from 'axios';
import {Link} from "react-router-dom";
import './Quiz.css';
import { UserAuth } from '../context/AuthContext';

function Quiz(){
    const [quizarr,setquizarr]=useState([]);
    const [search,setsearch]=useState("");
    const {logout}=UserAuth();
    useEffect(()=>{
        Axios.get("https://quiz-backend-wyw9.onrender.com/quiz/")
        .then((res)=>{
            if(res.status===200)
                setquizarr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    },[]);
   
    function quizlist(){
        return quizarr.map((val,ind)=>{
            return (<Link to="/quizpage" state={{quizdata:{val}}} class="text-decoration-none">
                {val.title.toLowerCase().includes(search) && <div class=" c card m-5 p-5 shadow">{val.title}</div>}</Link>);

        })
    }
    
    
    const handlesignout=(e)=>{
        try{
            logout();
        }
        catch{
            console.log(e);
            alert(e);
        }

    }
    
    return(
        <div>
        
            <nav class="nav bg-warning position-sticky top-0" style={{zIndex:1}}>
            <Link to="/quiz" class="text-decoration-none nav-link mt-2">
               <b>QUIZz App</b></Link>
            <input type="text" placeholder="Search Quiz" class=" form-control my-2 mx-5" style={{width:"20%"}}
        onChange={(e)=>{setsearch(e.target.value.toLowerCase())}}/>
            <Link to="/createquiz" class="text-decoration-none nav-link ms-auto">
                <button class="btn btn-outline-success"> Create <i class="pi pi-plus-circle"></i></button></Link>
            
                <button class="btn btn-outline-danger me-3 my-2" onClick={handlesignout}>SignOut <i class="pi pi-sign-out"></i></button>
            </nav>
        
         <div class="d-flex m-5 p-5">  
       {quizlist()}
       </div> 
       
        </div>
    )
}
export default Quiz;