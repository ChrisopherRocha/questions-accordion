import { useState } from 'react'
import Questions from './Questions.jsx';
import data from './data.js';
import './App.css';

function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main className="App">
      <h1>Hello Questions</h1>
      <Questions questions={questions} />
    </main>
  );
}

export default App;
