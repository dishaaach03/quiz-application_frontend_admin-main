import { HashRouter,Route,Routes } from 'react-router-dom';
import Quiz from './Quiz';
import Quizpage from './Quizpage';
import QuizForm1 from './Quizform1';
import EditQuiz from './EditQuiz';
import Loginpage from './Loginpage';
import ProtectRoute from './ProtectRoute';

function QuizRoute(){

    return(
        <div>
        <HashRouter>
        <Routes>
          <Route path='/' element={<Loginpage/>}/>
          <Route path='/quiz' element={<ProtectRoute><Quiz/></ProtectRoute>}/>
          <Route path='/quizpage' element={<ProtectRoute><Quizpage/></ProtectRoute>}/>
          <Route path='/createquiz' element={<ProtectRoute><QuizForm1/></ProtectRoute>}/>
          <Route path='/editquiz/:id' element={<ProtectRoute><EditQuiz/></ProtectRoute>}/>
        </Routes>
        </HashRouter>
    
      </div>);
}
export default QuizRoute;