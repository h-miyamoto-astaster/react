import React,{ useRef } from "react";

import { useTodo } from "../hooks/useTodo";

import { TodoTitle } from "./TodoTitle";

import { TodoAdd } from "./TodoAdd";

import { TodoList } from "./TodoList";


export default function App(){
  
  const { todoList,addTodoListItem,toggleTodoListItemStatus,deleteTodoListItem } = useTodo();

  console.log("TODOリスト：",todoList);

  const inputEl = useRef(null);

  const handleAddTodoListItem = () => {
    if(inputEl.current.value === "") return;

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
        
        <TodoAdd buttonText="+ TODOを追加" inputEl={inputEl} handleAddTodoListItem={handleAddTodoListItem} />
             
        <TodoList title="未完了TODOリスト" as="h2" todoList={inCompletedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem = {deleteTodoListItem} />
        
        <TodoList title="完了TODOリスト" as="h2" todoList={CompletedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem = {deleteTodoListItem} />

      </>
  );
};