import { useEffect,useState } from "react";

function App() {
  const [textState,setTextState] = useState("");
  useEffect(() =>{
    console.log("副作用");
  },[]);
  console.log("レンダリング")

  return (
    <div className="App">
      <input type="text" value={textState} onChange = {(e) => setTextState(e.target.value)} />
    </div>
  );
}

export default App;
