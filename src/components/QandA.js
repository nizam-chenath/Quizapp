import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const QandA = ({questionNum,questions,options,setQuestionNum,setQuestions,setOptions,qnum,setqnum}) => {
    const navigate = useNavigate();
    const nextquestion = () =>{
        if(questionNum < qnum){

            setQuestionNum(questionNum+1);
        }else{
            navigate('/')
            setQuestionNum(questionNum+1)
            setqnum(qnum+5)
        }
       
    }
  return (
    <div className="question-section">
    <div className="questionNumber">
      {questionNum+1}
    </div>
    <div className="questiondiv">
       <p>{questions[questionNum].question}</p>
    </div>

    <div className="answeres">
        {
        options ? 
        options.map((item) =>{
            return(
                <div className="answer">{item}</div>
            )
        })
    : 
     <p>Loading</p>
    }
       
      <button className="next-btn" onClick={nextquestion}>Next</button>
      
    </div>
  </div>
  )
}

export default QandA