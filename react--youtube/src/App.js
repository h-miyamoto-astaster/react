import "./App.css";
import {Counter,ToggleButton} from "./components";
import {useState,useEffect} from "react"

function App() {
  const [name,setName] = useState('');
  const [id,setId] = useState('deatiger');
  const ids = ['deatiger','gaearon','aws','google','facebook'];

  const getRandomId = () =>{
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id);
  }
  
  useEffect(() =>{
    fetch(`https://api.github.com/users/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setName(data.name)
    })
    .catch(error =>{
      console.log(error)
    })
  },[id])

  return(
    <>
      <p>{id}の、github上の名前は{name}です。</p>
      <button onClick={getRandomId}>IDを変更</button>
    </>
  )
}

export default App;
