import { Link, useLocation } from "react-router-dom";
import Axios from 'axios';
import { UserAuth } from "../context/AuthContext";



function Quizpage(){
    const location=useLocation();
    const {quizdata}=location.state;
    let arr=quizdata.val;
    var qn=1;
    var op=0;
    const opt=['A','B','C','D'];
    const {logout}=UserAuth();
    const handlesignout=(e)=>{
        try{
            logout();
        }
        catch{
            console.log(e);
            alert(e);
        }
    }
    
    function showquiz(){
       
             return (arr.questions.map((val,ind)=>{
                 return <div><p key={ind}><b>{qn++}.{val.questionText}</b></p>
                 <ul>{val.options.map((val1,ind1)=>{
                    return <li key={ind1} style={{color:val1.isCorrect?"green":"red"}}>
                        <b>{opt[op++%4]})</b> { val1.optionText}</li>})}</ul></div>
                }))}
                
    
    const handleClick = () => {
        Axios.delete("https://quiz-backend-wyw9.onrender.com/quiz/delete-quiz/"+arr._id)
        .then((res) => {
            if(res.status === 200){
                alert("Quiz deleted successfully");
                window.location.assign('/#/quiz');
            }
            else    
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return (
    <div>
        <nav class="nav bg-warning position-sticky top-0" style={{zIndex:1}}>
            
            <Link to="/quiz" class="nav-link mt-2">
               <b>QUIZz App</b></Link>
               <table class="ms-auto"><tr><td>
               <Link to={'/editquiz/'+arr._id} class=" nav-link">
                <button class="btn btn-info">Edit <i class="pi pi-file-edit"></i></button></Link></td>
               
                <td><button onClick={handleClick} class="btn btn-dark my-2">Delete <i class="pi pi-trash"></i></button></td>
                
                <td>
                <button class="btn btn-outline-danger mx-3" onClick={handlesignout}>SignOut <i class="pi pi-sign-out"></i></button>
                </td></tr></table>
            </nav>
    <div class="ms-5 mt-4">{showquiz()}
    
    
    </div>
    </div>
    );
    
}
export default Quizpage;