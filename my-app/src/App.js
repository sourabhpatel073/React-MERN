import logo from './logo.svg';
import './App.css';
import Timer from './Components/Timer';
import Counter from './Components/Counter';
import useCounter from './CustomComponents/useCounter';
import useTimer from './CustomComponents/useTimer';
import { useRef } from 'react';
import Data from './Components/data';

function App() {
  const[count,add,reduce]=useCounter(2)
  const [time]=useTimer(10)
  
  return <div>
    <h1>count{count} time-{time}</h1>
    <button onClick={()=>{add()}}>add</button>
    <button onClick={()=>{reduce()}}>reduce</button>
<Data/>
  </div>
}

export default App;
