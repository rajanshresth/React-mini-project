import './App.css';
import data from './data';
import { useState } from 'react';
import Question from './Question';

function App() {
  const [question, setQuestion] = useState(data);
  return (
    <div className="App h-screen bg-red-500 flex justify-center items-center">
      <section >
        <h1 className="bg-red-300">Questions And Answer</h1>
        <div className="accent-purple-50">
          {question.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
