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
      @media screen and (max-width: 767px) {
        width:100%;
        max-width:200px;
      }
    `;

    const Todoitem_wrap = styled.div`
      width:100%;
      display:flex;
      align-items:center;
      column-gap:20px;
      margin-top:20px;
      margin-left:10px;
      @media screen and (max-width: 767px) {
        flex-direction:column;
        row-gap:30px;
        margin-left:0;
      }
    `;

    const Todoitem_text = styled.p`
      width:30%;
      line-height:1.5;
      @media screen and (max-width: 767px) {
        width:fit-content;
        margin:auto;
      }
    `;

    const Todoitem_btnarea = styled.div`
      display:flex;
      column-gap:10px;
      align-items:center;
      @media screen and (max-width: 767px) {
        width:100%;
        justify-content:center;
      }
    `;
    return(
      <li>
        <Todoitem_wrap>
          <Todoitem_text>
            {todo.content}
          </Todoitem_text>
          <Todoitem_btnarea>
            <Btn01 onClick={handleToggleTodoListItemStatus}>
              {todo.done ? "未完了リストへ" : "完了リストへ"}
            </Btn01>
            <Btn03 onClick={handleDeleteTodoListItem}>削除</Btn03>
          </Todoitem_btnarea>
        </Todoitem_wrap>
      </li>
    );
  };