import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const QandA = ({questionNum,questions,options,correct,setQuestionNum,setQuestions,setOptions,qnum,setqnum ,score,setScore}) => {
    const navigate = useNavigate();

    const [selected, setSelected] = useState();

    const handleSelect = (item) =>{
       if(selected ===item && selected===correct){
         return "select";
       }else if(selected === item && selected !== correct){
         return "wrong";
       }else if(item=== correct){
         return "select";
       }
    } 

    const handleCheck = (item) =>{
      setSelected(item);
      if(item === correct) 
           setScore(score +1);
      
    }

    const nextquestion = () =>{
        if(questionNum < qnum){

            setQuestionNum(questionNum+1);
            setSelected();
        }else{
            navigate('/')
            setQuestionNum(questionNum+1)
            setSelected();
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
                <button onClick={() => handleCheck(item)} className={`answer ${selected && handleSelect(item)}`} key={item} disabled={selected}>{item}</button>
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