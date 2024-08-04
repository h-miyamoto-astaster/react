import React from 'react'
import styled from 'styled-components';

export const TodoAdd = ({buttonText,inputEl,handleAddTodoListItem}) =>{
  const Btn02 = styled.button`
    display:block;
    background-color:white;
    width:200px;
    height:50px;
    margin-top:10px;
    margin-left:auto;
    border-radius:25px;
    border:1px solid dimgray;
    text-align:center;
    transition:all 0.3s;
    &:hover{
      opacity:0.6;
    }
    @media screen and (max-width: 767px) {
      width:100%;
      max-width:200px;
      margin:auto;
      margin-top:20px;
      font-size:15px;
    }
  `;  
  
  const Textarea1 = styled.textarea`
    display:block;
    width:100%;
    padding:20px;
    border:1px solid dimgray;
    background-color:white;
    @media screen and (max-width: 767px) {
      margin-top:30px;
    }
  `;

  const TodoaddWrap = styled.div`
    width:100%;
    max-width:500px;
    margin:auto;
    margin-top: 60px;
  `;
  return(
      <>
        <TodoaddWrap>
          <Textarea1 ref={inputEl}/>
    
          <Btn02 onClick={handleAddTodoListItem}>{buttonText}</Btn02>
        </TodoaddWrap>
      </>
    );
  };