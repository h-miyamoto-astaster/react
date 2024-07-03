import { useEffect,useRef,useState } from "react";

function App() {
  //const [textState,setTextState] = useState("");
  const textRef = useRef();
  const [flag,setFlag] = useState(false);
  useEffect(() =>{
    console.log("副作用");
  },[flag]);
  console.log("レンダリング")

  return (
    <div className="App">
      <input type="text" ref={textRef} />
      <button onClick={()=>setFlag((example) => !example)}>送信</button>
    </div>
  );
}

export default App;
