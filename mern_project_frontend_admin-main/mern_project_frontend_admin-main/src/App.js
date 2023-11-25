import './App.css';
import QuizRoute from './components/QuizRoutes';
import { AuthContextProvider } from './context/AuthContext';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "primeicons/primeicons.css"


function App() {
  return (
    <div>
      <AuthContextProvider>
      <QuizRoute/>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
