import React,{ useRef } from "react";

import { useTodo } from "../hooks/useTodo";

const TodoTitle = ({title,as}) =>{
  if(as == "h1") return <h1>{title}</h1>;
  if(as == "h2") return <h2>{title}</h2>;
  return <p>{title}</p>
}

const TodoItem = ({todo,toggleTodoListItemStatus,deleteTodoListItem}) =>{
  const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id);

  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);
  return(
    <li>
      {todo.content}
      <button onClick={handleToggleTodoListItemStatus}>
        {todo.done ? "未完了リストへ" : "完了リストへ"}
      </button>
      <button onClick={handleDeleteTodoListItem}>削除</button>
    </li>
  );
};

const TodoList = ({todoList,toggleTodoListItemStatus,deleteTodoListItem}) =>{
  return (
    <ul>
      {todoList.map((todo) =>(
        <TodoItem todo={todo} key={todo.id} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} />
      ))}
    </ul>
  )
}

const TodoAdd = ({inputEl,handleAddTodoListItem}) =>{
  return(
    <>
      <textarea ref={inputEl}/>

      <button onClick={handleAddTodoListItem}>+ TODOを追加</button>
    </>
  );
};

export default function App(){
  
  const { todoList,addTodoListItem,toggleTodoListItemStatus,deleteTodoListItem } = useTodo();

  console.log("TODOリスト：",todoList);

  const inputEl = useRef(null);

  const handleAddTodoListItem = () => {
    if(inputEl.current.value == "") return;

    addTodoListItem(inputEl.current.value);
    inputEl.current.value = "";
  };

  console.log("TODOリスト:".todoList);

  const inCompletedList = todoList.filter((todo) =>{
    return !todo.done;
  });

  console.log("未完了TODOリスト：",inCompletedList);

  const CompletedList = todoList.filter((todo) =>{
    return todo.done;
  });

  return(
      <>
        <TodoTitle title="TODO進捗管理" as="h1" />
        
        <TodoAdd inputEl={inputEl} handleAddTodoListItem={handleAddTodoListItem} />
        
        <TodoTitle title="未完了TODOリスト" as="h2" />
        
        <TodoList todoList={inCompletedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem = {deleteTodoListItem} />
        
        <TodoTitle title="完了TODOリスト" as="h2" />
        
        <TodoList todoList={CompletedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem = {deleteTodoListItem} />

      </>
  );
};