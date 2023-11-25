import React, { useState } from 'react';
import Axios from 'axios';
import './Quizform.css';
import { Link } from 'react-router-dom';

const QuizForm1 = () => {
 
   const [quizData, setQuizData] = useState({
    title: '',
   questions: Array.from({ length: 10 }, () => ({
      questionText: '',
      options: Array.from({ length: 4 }, () => ({ optionText: '', isCorrect: false })),
    })),
  });;
  const opt=['A','B','C','D'];
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

  const handleRadioChange = (questionIndex, optionIndex) => {
    setQuizData((prevQuizData) => {
      const updatedQuizData = { ...prevQuizData };
      updatedQuizData.questions[questionIndex].options.forEach((option, idx) => {
        option.isCorrect = idx === optionIndex;
      });

      return updatedQuizData;
    });
  };
  const handleQuesno=(e)=>{
    const qno=e.target.value;
    setQuizData({title: '',
   questions: Array.from({ length: qno }, () => ({
      questionText: '',
      options: Array.from({ length: 4 }, () => ({ optionText: '', isCorrect: false })),
    })),
  });

  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    
      Axios.post('https://quiz-backend-wyw9.onrender.com/quiz/create-quiz', quizData)
      .then((res)=>{
        if(res.status === 200){
            alert("Quiz created successfully");
            window.location.assign('/#/quiz');}
        else
            Promise.reject();
    })
    .catch((err)=>alert(err));
    
  };

  return (
    <div>
    <nav class="nav bg-warning position-sticky top-0" style={{zIndex:1}}>
            <Link to="/quiz" class="text-decoration-none nav-link mt-2">
               <b>QUIZz App</b></Link></nav>
    <div class="ms-5 container">
     
    <form onSubmit={handleSubmit}>
      <label htmlFor="quizTitle">Quiz Title:</label>
      <input
        type="text"
        id="quizTitle"
        name="quizTitle"
        value={quizData.title}
        onChange={(e) => setQuizData({ ...quizData, title: e.target.value })}
        required
      class="title mt-4"/><br/><br/>
      <label for="quesno">Number of Question:</label>
        <input type="number" name="quesno" onChange={handleQuesno} defaultValue={10}/>
      
      

      {quizData.questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          
          
         <label>Question {questionIndex + 1}:</label>
          <input
            type="text"
            value={question.questionText}
            onChange={(e) => handleInputChange(questionIndex, e.target.value, true)}
            required
            class="question mt-5"/>

          {question.options.map((option, optionIndex) =>(
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
                name={questionIndex }
                checked={option.isCorrect}
                onChange={() => handleRadioChange(questionIndex, optionIndex)}
              />
              <label>Is Correct</label>
            </div>
          ))}
        </div>
      ))}

      <button type="submit" class="btn btn-success my-5">Save Quiz</button>
      
    </form>
   
    </div>
    </div>);
};

export default QuizForm1;




