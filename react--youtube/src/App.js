import { useState } from "react";

function App() {

  const [count,setCount] = useState(0);

  const handleCount = (num) =>{
    setCount((current) =>{
      return current + num;
    })
  }
  return (
    <>
    <div className="App">
      <button onClick={() =>handleCount(-1)}>-</button>
      <button onClick={() =>handleCount(+1)}>+</button>
      <p>{count}</p>
    </div>
    </>
  );
}

export default App;
