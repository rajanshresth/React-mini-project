import React,{useState} from 'react';
import './App.css';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let amount = parseInt((e.target as HTMLFormElement).amount.value);
    
    setText(data.slice(0,amount));
  };
  const handleCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(parseInt(e.target.value));
  };

  return (
    <div className="App h-screen bg-red-50 max-w-48">
      <h1>
        Lorem ParaGraph Generator
      </h1>
      <form action="lorem" onSubmit={handleSubmit} >
        <label htmlFor="amounet">
          Paragraphs:
        </label>
        <input type="number" name="amount" id="amount" min="1" value={count} onChange={handleCount} />
        <button type="submit" className="bg-blue-400 rounded-3xl hover:to-blue-700">Generate</button>
      </form>
      {text.map((item, index) => {
        return <p key={index}>{item}</p>;
    })}
    </div>
  );
}

export default App;
