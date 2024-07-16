import {useEffect, useState,useContext, useRef,useMemo} from "react";
import './App.css'
import ShinCodeContext from "./main";

function App() {
  const [count,setCount] = useState(0)
  const shinCodeInfo = useContext(ShinCodeContext);
  const ref = useRef();
  
  useEffect(() => {
    console.log("hello.hooks");
  },[])

  const handleClick = () =>{
    setCount(count + 1)
  }

  const handleRef = () =>{
    console.log(ref.current.value);
    console.log(ref.current.offsetHeight);
  }

  const [count01,setCount01] = useState(0);
  const [count02,setCount02] = useState(0);

  /*const square = () =>{
    let i= 0;
    while( i < 2000000){
      i++;
    }
    return count02 * count02;
  }*/

  const square = useMemo(() =>{
    let i= 0;
    while( i < 200000){
      i++;
    }
    return count02 * count02;
  },[count02])

  return (
    <>
      <h1>useState</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{shinCodeInfo.name}</p>
      <p>{shinCodeInfo.age}</p>

      <h1>useRef</h1>
      <input type="text" ref={ref}/>
      <button onClick={handleRef}>useRef</button>

      <h1>useMemo</h1>
      <div>カウント１:{count01}</div>
      <div>カウント２:{count01}</div>
      <div>結果{square}</div>
      <button onClick={() => setCount01(count01 + 1)}>＋</button>
      <button onClick={() => setCount02(count02 + 1)}>＋</button>
    </>
  )
}

export default App
