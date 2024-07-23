import React,{ useState } from 'react';

const useCounter = (initialCount) =>{
  const [count,setCount] = useState(initialCount);

  const countAdd = () => setCount((prevCount) => prevCount +1);

  const countSub = () => setCount((prevCount) => prevCount -1);

  const countReset = () => setCount(initialCount);

  return {count,countAdd,countSub,countReset};
}

const CounterText = ({count}) => <p>現在のカウント数:{count}</p>;

const Counter = () =>{
  const {count,countAdd,countSub,countReset} = useCounter(0);
  return(
    <div className="counterContainer">
      <CounterText count={count} />
      <button onClick={countAdd}>ボタン + 1</button>
      <button onClick={countSub}>ボタン - 1</button>
      <button onClick={countReset}>リセット</button>
    </div>
  )
}
export default function App(){

  return(
      <Counter />
  )
};
