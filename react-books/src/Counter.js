import React from 'react'

const Counter = ({
    count,
    countIncrement,
    countDecrement,
    countReset,
    INITIAL_COUNT
}) => {
  return (
    <div>
        <p>
          現在のカウント数:<b>{count}</b>
          <br />
          countの初期値:<b>{INITIAL_COUNT}</b>
        </p>
        <button onClick={countIncrement}>increment</button>
        <button onClick={countDecrement}>decrement</button>
        <button onClick={countReset}>reset</button>
    </div>
  )
}

export default Counter