import { useState } from 'react';
import Counter from './Counter';
import Hello from './Hello';

  const INITIAL_COUNT = 0;
  
  const INITIAL_NAME = "JavaScript";

  const SampleComponent = () => {
    const [count,setCount] = useState(INITIAL_COUNT);

    const [name,setName] = useState(INITIAL_NAME);

    const countIncrement = () => setCount((prevCount) => prevCount + 1);

    const countDecrement = () => setCount((prevCount) => prevCount - 1);

    const countReset = () => setCount(INITIAL_COUNT);

    const handleChangeName = (e) =>{
      setName(e.target.value);
    } ;
  
  return (
    <div className="App">
      <Counter 
      count = {count}
      countIncrement = {countIncrement}
      countDecrement = {countDecrement}
      countReset = {countReset}
      initialCount = {INITIAL_NAME}
      />

      <Hello 
      name = {name}
      handleChangeName = {handleChangeName}
      initialName = {INITIAL_NAME}
      />
    </div>
  );
}

export default function App(){
  return(
    <>
      <SampleComponent />
    </>
  )
};
