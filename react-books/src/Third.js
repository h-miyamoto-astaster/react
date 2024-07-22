import React,{useContext} from 'react'

import {CountContext} from "./CountProvider";

const Third = () => {
   const [count,setCount] = useContext(CountContext);
   console.log(`現在のカウント:${count}`)

   const handleClick = () =>{
    setCount((prevCount) => prevCount +1);
   };
  return (
    <div>
      <p>Thirdコンポーネント:<b>現在のカウント:{count}</b></p>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}

export default Third