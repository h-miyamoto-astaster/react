import React from 'react'
import {useState,useEffect} from "react"

const Counter = () => {
   const [count,setCount] = useState(0);
   const [count2,setCount2] = useState(0);

   const countUp = () => {
      setCount(prevState => {
         return prevState + 1
   })
   }

   const countDown = () => {
      setCount(prevState => {
         return prevState - 1
      })
   }

   const count2Up = () => {
      setCount2(prevState => {
         return prevState + 1
   })
   }

   //毎回実行される
   useEffect(() =>{
      console.log("Current count is",count)
   },[count])

   return (
    <div>
      <p>
      現在のカウント数:{count}
      </p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
      <p>
      現在のカウント数:{count2}
      </p>
      <button onClick={count2Up}>up</button>
   </div>
  )
}

export default Counter