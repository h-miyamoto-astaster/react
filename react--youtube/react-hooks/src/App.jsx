import {useEffect, useState,useContext} from "react";
import './App.css'
import ShinCodeContext from "./main";

function App() {
  const [count,setCount] = useState(0)
  const shinCodeInfo = useContext(ShinCodeContext);
  
  useEffect(() => {
    console.log("hello.hooks");
  },[])

  const handleClick = () =>{
    setCount(count + 1)
  }
  return (
    <>
      <h1>useState</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{shinCodeInfo.name}</p>
      <p>{shinCodeInfo.age}</p>
    </>
  )
}

export default App
