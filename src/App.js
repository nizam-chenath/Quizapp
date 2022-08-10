import axios from 'axios';
import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import Questions from './components/Questions';
import { useState } from 'react';

function App() {
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [questionNum, setQuestionNum] = useState(0);
  const [qnum,setqnum] = useState(4);

  const fetchQuestions = async () =>{
     const {data} = await axios.get(
       `https://opentdb.com/api.php?amount=100`
       
     );
     console.log("results",data.results);
     setQuestions(data.results)
  }
  return (
    <div className="App">
      <Routes>
       < Route path="/" element={<Home fetchQuestions={fetchQuestions} questionNum={questionNum} setQuestionNum={setQuestionNum} score={score} setScore={setScore}/>} />
      
       < Route path="/questions" element={<Questions
        fetchQuestions={fetchQuestions}
         questions={questions}
          score={score}
           setScore={setScore}
            setQuestions={setQuestions}
             questionNum={questionNum}
              setQuestionNum={setQuestionNum}
              qnum={qnum} 
              setqnum={setqnum}/>}/>
      </Routes>
         
    </div>
  );
}

export default App;
