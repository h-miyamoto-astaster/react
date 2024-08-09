import axios from "axios";
import { useState,useEffect } from "react";


const todoDataUrl = "http://localhost:3100/todos"
function App() {

  const [todoList,setTodoList] = useState([]);
  useEffect(() => {
    const fetchData = async() =>{
      const response = await axios.get(todoDataUrl);
      setTodoList(response.data);
    };
    fetchData();
  },[]);

  console.log("Todoリスト",todoList);
  return (
    <div className="App">
      <p>これから掲示板アプリを実装します。</p>
    </div>
  );
}

export default App;
