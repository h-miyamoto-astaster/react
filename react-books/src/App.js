import { useState } from 'react';

  const INITIAL_COUNT = 0;
  
  const INITIAL_NAME = "JavaScript";

  const SampleComponent = () => {

    const [count,setCount] = useState(INITIAL_VALUE);

    const callbackFunction = () =>{
      document.title = `${count} 回クリックされました`;
    }
    useEffect(callbackFunction,[count]);
    
    const countIncrement = () =>{
      setCount((prevCount) => prevCount + 1);
    };
    
  return (
    <div className="App">
      <p>現在のカウント数:{count}</p>
      
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
