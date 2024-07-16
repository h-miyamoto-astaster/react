import {useEffect, useState,useContext, useRef,useMemo} from "react";
import './App.css'

function App() {
  const INITIAL_COUNT = 0;
  
  const INITIAL_NAME = "JavaScript";

  const sampleComponent = () => {
    const [count,setCount] = useState(INITIAL_COUNT);

    const [name,setNAME] = useState(INITIAL_NAME);

    const countIncrement = () => setCount((prevCount) => prevCount + 1);

    const countDecrement = () => setCount((prevCount) => prevCount - 1);

    const countReset = () => setCount(INITIAL_COUNT);

    const handleChangeName = (e) =>{
      setNAME(e.target.value);
    } ;

    return(
      <div className="App">
        <p>
          現在のカウント数:<b>{count}</b>
          <br />
          countの初期値:<b>{INITIAL_COUNT}</b>
        </p>
        <button onClick={countIncrement}>increment</button>
        <button onClick={countDecrement}>decrement</button>
        <button onClick={countReset}>reset</button>
        <p>
        Hello,<b>{name}!!</b>
        <br />
        nameの初期値:<b>{INITIAL_NAME}</b>
        </p>
        <input type="text" onChange={handleChangeName} />
      </div>
    );
  };

  return (
    <>

    </>
  )
}

export default App
