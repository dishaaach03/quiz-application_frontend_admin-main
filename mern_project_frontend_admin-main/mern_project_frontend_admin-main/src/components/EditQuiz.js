import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Quizform.css';

function EditQuiz(){
    const navigate=useNavigate();
    const opt=['A','B','C','D'];
    const {id}=useParams();
    const [quizData, setQuizData] = useState({
        title: '',
        questions: Array.from({}, () => ({
          questionText: '',
          options: Array.from({}, () => ({ optionText: '', isCorrect: false })),
        })),
      });
      useEffect(() => {
        const fetchQuizData = async () => {
          try {
            const response = await axios.get(`https://quiz-backend-wyw9.onrender.com/quiz/edit-quiz/${id}`);
            setQuizData(response.data);
          } catch (error) {
            console.error(error.message);
          }
        };
    
        fetchQuizData();
      }, [id]);
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          await axios.put(`https://quiz-backend-wyw9.onrender.com/quiz/edit-quiz/${id}`, quizData);
          alert('Quiz updated successfully!');
        } catch (error) {
          alert(error.message);
        }
        navigate("/quiz");
      };
      const handleRadioChange = (questionIndex, optionIndex) => {
        setQuizData((prevQuizData) => {
          const updatedQuizData = { ...prevQuizData };
          updatedQuizData.questions[questionIndex].options.forEach((option, idx) => {
            option.isCorrect = idx === optionIndex;
          });
          return updatedQuizData;
        });
      };
      const handleInputChange = (questionIndex, value, isQuestion) => {
        setQuizData((prevQuizData) => {
          const updatedQuizData = { ...prevQuizData };
          if (isQuestion) {
            updatedQuizData.questions[questionIndex].questionText = value;
          }
          return updatedQuizData;
        });
      };
    
      const handleOptionChange = (questionIndex, optionIndex, value) => {
        setQuizData((prevQuizData) => {
          const updatedQuizData = { ...prevQuizData };
          updatedQuizData.questions[questionIndex].options[optionIndex].optionText = value;
          return updatedQuizData;
        });
      };
    return(
      <div>
    <nav class="nav bg-warning position-sticky top-0" style={{zIndex:1}}>
            <Link to="/quiz" class="text-decoration-none nav-link mt-2">
               <b>QUIZz App</b></Link></nav>
      <div class="container ms-5">
    <form onSubmit={handleSubmit}>
      
        <label htmlFor="quizTitle">Quiz Title:</label>
        <input
          type="text"
          id="quizTitle"
          name="quizTitle"
          value={quizData.title}
          onChange={(e) => setQuizData({ ...quizData, title: e.target.value })}
          required
        class="title mt-4"/>
        
  
        {quizData.questions.map((question, questionIndex) => (
          <div key={questionIndex}>
            <label>Question {questionIndex + 1}:</label>
            <input
              value={question.questionText}
              onChange={(e) => handleInputChange(questionIndex, e.target.value, true)}
              required
            class="question mt-5"/>
  
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <label>
                  Option {opt[optionIndex]}:
                </label>
                <input
                  type="text"
                  value={option.optionText}
                  onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                  required
                class="option mt-2"/>
                <input
                  type="radio"
                  id={questionIndex}
                  name={questionIndex}
                  checked={option.isCorrect}
                  onChange={() => handleRadioChange(questionIndex, optionIndex)}
                />
                <label>Is Correct</label>
              </div>
            ))}
          </div>
        ))}
  
        <button type="submit" class="btn btn-success my-5">Update Quiz</button>
      </form>
      </div>
      </div>);
}
export default EditQuiz;

