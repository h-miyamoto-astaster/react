import React from 'react'
import {useCounter} from "./hooks";
import {CounterText} from "./Countetext"

const CounterC = () => {
    const {count,countAdd,countSub,countReset} = useCounter(0);
  return (
    <div className="counterContainer">
        <h1>カウンターC</h1>
        <CounterText count={count} />
        <button onClick={countAdd}>ボタン + 1</button>
        <button onClick={countSub}>ボタン - 1</button>
        <button onClick={countReset}>リセット</button>
    </div>
  )
}

export default CounterA