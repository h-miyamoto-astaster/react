import React,{ useState,useEffect } from 'react';
import axios from "axios";

const todoDataUrl = "http://localhost:3100/todos";
export default function App(){
  
  const [todoList,setTodoList] = useState([]);
  
  useEffect(() =>{
    const fetchData = async() =>{
      const response = await axios.get(todoDataUrl);
      setTodoList(response.data);
    };
    fetchData();
  },[]);

  console.log("TODOリスト：",todoList);

  const inCompletedList = todoList.filter((todo) =>{
    return !todo.done;
  });

  console.log("未完了TODOリスト：",inCompletedList);

  const CompletedList = todoList.filter((todo) =>{
    return todo.done;
  });

  return(
      <>
      <h1>TODO進捗管理</h1>
        <textarea />
          
          <button>+ TODOを追加</button>

          <h2>未完了TODOリスト</h2>
          <ul>
            {inCompletedList.map((todo) =>(
              <li key={todo.id}>
                {todo.content}
                <button>
                  {todo.done ? "未完了リストへ":"完了リストへ"}
                </button>

                <button>削除</button>
              </li>
            ))}
          </ul>
          <h2>TODOリスト</h2>
          <ul>
            {todoList.map((todo) =>(
              <li key={todo.id}>
                {todo.content}
                <button>
                  {todo.done ? "未完了リストへ":"完了リストへ"}
                </button>

                <button>削除</button>
              </li>
            ))}
          </ul>
      </>
  );
};