import React from 'react'
import './style.scss'
import {useNavigate} from 'react-router-dom'

const Score = ({fetchQuestions}) => {
  const navigate = useNavigate();


  const backToQuestions = () => {
      navigate('/questions');
      // fetchQuestions()
    
  }
  return (
    <>
      <div className="container">
          <div className="image-section">
             <img src="images/quizhome.png" alt="" />
          </div>
          <div className="button-section">
          <button onClick={backToQuestions} className="btn1">Start</button><br />
          <button className="btn2">Reset</button>
          </div>
      </div>
    </>
  )
}

export default Score