import React from 'react'
import './style.scss'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const questionsPage = () => {
      navigate('/questions')
    
  }
  return (
    <>
      <div className="container">
          <div className="image-section">
             <img src="images/quizhome.png" alt="" />
          </div>
          <div className="button-section">
          <button onClick={questionsPage} className="btn1">Start</button><br />
          <button className="btn2">Reset</button>
          </div>
      </div>
    </>
  )
}

export default Home