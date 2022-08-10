import React from 'react'
import './style.scss'
import {useNavigate} from 'react-router-dom'

const Home = ({fetchQuestions,questionNum,score,setQuestionNum,setScore}) => {
  const navigate = useNavigate();


  const questionsPage = () => {
      navigate('/questions');
      fetchQuestions()
    
  }

  const resetAll = () =>{
    setQuestionNum(0)
    setScore(0)
  }
  return (
    <>
      <div className="container">
          <div className="image-section">
             <img src="images/quizhome.png" alt="" />
          </div>
          <div className="button-section">
            <div className="questions">No of questions : {questionNum}</div>
            <div className="score">Current Score : {score}</div>
          <button onClick={questionsPage} className="btn1">Start</button><br />
          <button onClick={resetAll} className="btn2">Reset</button>
          </div>
      </div>
    </>
  )
}

export default Home