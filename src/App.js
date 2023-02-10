import {useState} from 'react';
import './App.css';
import Navin from './Components/Navin';

function App() {
  const[category,setCategory] = useState('general');
  return (
    <div className="App">
      <Navin setCategory={setCategory}/>
    </div>
  );
}

export default App;
