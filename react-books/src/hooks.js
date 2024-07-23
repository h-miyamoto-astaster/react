import React,{useState} from 'react'

const hooks = () => {
  
    const [count,useCount] = useState(initialCount)

    const countAdd = () => setCount((prevCount) => prevCount +1);

    const countSub = () => setCount((prevCount) => prevCount -1);
  
    const countReset = () => setCount(initialCount);
  
    return {count,countAdd,countSub,countReset};

}

export default hooks