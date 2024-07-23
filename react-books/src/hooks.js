import React,{useState} from 'react'

export const useCounter = (initialCount) => {
  
    const [count,setCount] = useState(initialCount)

    const countAdd = () => setCount((prevCount) => prevCount +1);

    const countSub = () => setCount((prevCount) => prevCount -1);
  
    const countReset = () => setCount(initialCount);
  
    return {count,countAdd,countSub,countReset};

}
