import React from 'react'
import styled from 'styled-components';

export const TodoAdd = ({buttonText,inputEl,handleAddTodoListItem}) =>{
  const Btn02 = styled.button`
    display:block;
    background-color:white;
    width:250px;
    height:50px;
    margin-top:10px;
    border-radius:25px;
    border:1px solid dimgray;
    text-align:center;
    @media screen and (max-width: 767px) {
      width:100%;
      max-width:300px;
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
    @media screen and (max-width: 767px) {
      margin-top:30px;
    }
  `;

  const Todoadd_wrap = styled.div`
    width:100%;
    max-width:500px;
    margin:auto;
    margin-top: 30px;
    text-align:right;
  `;
  return(
      <>
        <Todoadd_wrap>
          <Textarea1 ref={inputEl}/>
    
          <Btn02 onClick={handleAddTodoListItem}>{buttonText}</Btn02>
        </Todoadd_wrap>
      </>
    );
  };