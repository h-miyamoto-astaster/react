import React from 'react'
import styled from 'styled-components';

export const TodoAdd = ({buttonText,inputEl,handleAddTodoListItem}) =>{
  const Btn02 = styled.button`
    background-color:white;
    width:300px;
    height:50px;
    border-radius:25px;
    border:1px solid dimgray;
    text-align:center;
  `;  
  
  const Textarea1 = styled.textarea`
    width:100%;
    max-width:500px;
    padding:20px;
  `;
  return(
      <>
        <Textarea1 ref={inputEl}/>
  
        <Btn02 onClick={handleAddTodoListItem}>{buttonText}</Btn02>
      </>
    );
  };