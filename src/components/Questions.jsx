import React from 'react'
import {useState,useEffect} from 'react'
import QandA from './QandA';

const Questions = ({questions, setQuestions, score, setScore,fetchQuestions,setQuestionNum,questionNum , qnum,setqnum} ) => {

  
  // const [questionData,setQuestionData] = useState("");
  const [options,setOptions] = useState();
  // const [questionNum,setQuestionNum] = useState(0)
  
useEffect(()=>{
  console.log("qestions",questions)
  setOptions(
    questions && handlesuffle([
      questions[questionNum].correct_answer,
      ...questions[questionNum].incorrect_answers,
    ])
  )
},[questions,questionNum]);

const handlesuffle = (optionss) =>{
    return optionss.sort(() => Math.random - 0.5)
}
  // useEffect(()=>{
  //   async function getQuiz(){
  //     try{
        
  //       console.log("fetching");
  //       const API_URL = "https://opentdb.com/api.php?amount=15";
  //       const  response = await fetch(API_URL);

  //       if(!response.ok){
  //         throw new Error(`Something went wrong, server responded with ${response.status}`);
  //       }

  //       const  json = await response.json();
  //       const {response_code, results } = json;

  //       if(response_code ===1){
  //         throw new Error('Bad API request - no results!');
  //       }else if(response_code===2){
  //         throw new Error("bad api request  - invalid parameter")
  //       }

  //       //successfully passed all the errors checks
  //       setQuestionData(results)
  //       console.log(questionData)

  //       console.log(questionData);
  //     }catch (err){
  //          console.log("something went wrong",err)
  //         //  setQuestionData(null)
  //     }
  //   }
  //   getQuiz();
  // },[]);
  //  const Question1 = questionData.question;



  return (
    <div>
         <div className="container question">
          <div className="image-section">
             <img src="images/question.png" alt="" />
          </div>
          {questions ? 
          
          <QandA 
            questions={questions} 
            setQuestions={setQuestions}
            setScore={setScore}
            score={score} 
            options={options} 
            setOptions={setOptions} 
            questionNum={questionNum} 
            setQuestionNum={setQuestionNum}
            qnum={qnum}
            setqnum={setqnum}
            />
          :
          <div>

            <p>loading</p>

          </div>
        }
      </div>
    </div>
  )
}

export default Questions