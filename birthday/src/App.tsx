import { useState } from 'react';
import './App.css';
import List from './List';
import Data from './Data'
import { People } from './People';


function App( ) {
  //define state
  const [people, setPeople] = useState<People[]>(Data);

  return (
    <main className="bg-blue-500 flex justify-center items-center  h-screen">

      <section className="grid grid-cols-1 gap-4 bg-red-200 p-2 rounded-2xl">
        <h2 className="text-3xl">{people.length} Birthdays Today</h2>
        
        <List people={people} />
        <button className="bg-green-200 hover:bg-green-300 text-white font-bold py-2 px-4 rounded" onClick={()=>setPeople([])}>Clear All</button>
        
      </section>

    </main>
  );
}

export default App;
