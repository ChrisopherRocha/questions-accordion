import { useState } from 'react'
import Questions from './Questions.jsx';
import data from './data.js';
import './App.css';

function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main className="App">
      <Questions questions={questions} />
    </main>
  );
}

export default App;
