import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos,setTodos] = useState(["Todo1","Todo2"]);
  
  return (
    <>
      <TodoList todos={todos}/>
      <input type="text" />
      <button>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </>
  );
}

export default App;
