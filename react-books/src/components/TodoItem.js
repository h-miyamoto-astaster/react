import React from 'react'
import styled from 'styled-components';

export const TodoItem = ({todo,toggleTodoListItemStatus,deleteTodoListItem}) =>{
    const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id,todo.done);
  
    const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);
    
    const Btn01 = styled.button`
      display:block;
      background-color:orange;
      width:200px;
      height:50px;
      border-radius:25px;
      border:1px solid orange;
      text-align:center;
      font-size:16px;
      font-weight:bold;
      color:white;
      cursor:pointer;
      transition:all 0.3s;
      &:hover{
        color:orange;
        background-color:white;
      }
    `;

    const Btn03 = styled.button`
      display:block;
      background-color:green;
      width:200px;
      height:50px;
      border-radius:25px;
      border:1px solid green;
      text-align:center;
      font-size:16px;
      font-weight:bold;
      color:white;
      cursor:pointer;
      transition:all 0.3s;
      &:hover{
        color:green;
        background-color:white;
      }
    `;
    return(
      <li>
        {todo.content}
        <Btn01 onClick={handleToggleTodoListItemStatus}>
          {todo.done ? "未完了リストへ" : "完了リストへ"}
        </Btn01>
        <Btn03 onClick={handleDeleteTodoListItem}>削除</Btn03>
      </li>
    );
  };