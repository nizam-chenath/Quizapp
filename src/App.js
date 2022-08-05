
import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import Questions from './components/Questions';

function App() {
  return (
    <div className="App">
      <Routes>
       < Route path="/" element={<Home/>}/>
       < Route path="/questions" element={<Questions/>}/>
      </Routes>
         
    </div>
  );
}

export default App;
