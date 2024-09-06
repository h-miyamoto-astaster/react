import React, { useState,useEffect,useRef } from "react";

import styled from 'styled-components';

import axios from "axios";

import { useNews } from "./useNews" ;

const newsDataUrl = "http://localhost:3100/news";

const DeleteBtn = styled.button`
  display:block;
  margin-top:5px;
  margin-bottom:10px;
  padding:5px 10px;
  text-align:center;
  border:1px solid #DD1B57;
  color:#DD1B57;
  transition:all 0.3s;
  &:hover{
    background-color:#DD1B57;
    color:white;
  }
`;

const InputSecrtion = styled.div`
  margin-top:60px;
  display:flex;
  flex-direction:column;
  column-gap:20px;
`;

const InputDate = styled.input`
  display:block;
  padding:5px 10px;
  border:1px solid gray;
`;

const InputArea = styled.textarea`
  display:block;
  padding:5px 10px;
  width:100%;
  height:100px;
  border:1px solid gray;
`;

const AddBtn = styled.button`
  display:block;
  width:200px;
  height:50px;
  line-height:50px;
  margin:auto;
  margin-top:25px;
  font-weight:bold;
  text-align:center;
  border:1px solid #DD1B57;
  color:#DD1B57;
  transition:all 0.3s;
  &:hover{
    background-color:#DD1B57;
    color:white;
  }
`;
const NewsDelete = ({newsId,deleteNewsListItem}) => {
  const handleDleteNewsListItem = () => deleteNewsListItem(newsId);

  return (
    <DeleteBtn onClick={handleDleteNewsListItem}>削除</DeleteBtn> 
  );
}

const NewsAdd = ({ inputEl,dateEl,handleAddNewsListItem }) => {
  return (
    <>
      <InputSecrtion>
        <InputDate ref={dateEl} placeholder="日付" maxLength="20"/>
        <InputArea ref={inputEl} placeholder="ニュース内容" maxLength="200"/>
      </InputSecrtion>
        <AddBtn onClick={handleAddNewsListItem}>Newsを追加</AddBtn>
    </>
  )
}

export function App() {
  const [newsList,setNewsList] = useState([]);

  useEffect(() => {
    const fetchData = async() =>{

      const response = await axios.get(newsDataUrl);
      setNewsList([...response.data].reverse());
    };
    fetchData();
  },[]);
  
  return (
    <>
      {newsList.map((news) =>(
        <a href="#" className="news-box__container" key={news.id}>
          <div className="news-box__day">{news.date}</div><p className="news-box__text">{news.content}</p>
        </a>
      ))}
    </>
  );
}

export function AdminApp() {
  let alertArea = document.getElementById("newsAlert");

  const {newsList,addNewsListItem,deleteNewsListItem} = useNews();

  const inputEl = useRef(null);
  const dateEl = useRef(null);

  const handleAddNewsListItem = () =>{
    let newsNum = newsList.length;
    if(newsNum >= 11){
      alertArea.textContent = "※お知らせは10件までです。";
      return;
    }
    if(inputEl.current.value === "" || dateEl.current.value === ""){
      alertArea.textContent = "※日付と内容を入力してください";
      return;
    };
    addNewsListItem(inputEl.current.value,dateEl.current.value);
    inputEl.current.value = "";
    dateEl.current.value = "";
    alertArea.textContent = "";
  }
  //const [newsList,setNewsList] = useState([]);

  /*useEffect(() => {
    const fetchData = async() =>{

      const response = await axios.get(newsDataUrl);
      setNewsList(response.data);
    };
    fetchData();
  },[]);*/
  console.log("これはadminapp");

  return (
    <>
      {newsList.map((news) =>(
        <React.Fragment key={news.id}>
          <a href="#" className="news-box__container" >
            <div className="news-box__day">{news.date}</div><p className="news-box__text">{news.content}</p>
          </a>
          <NewsDelete newsId={news.id} deleteNewsListItem={deleteNewsListItem}/>
        </React.Fragment>
      ))}

      <NewsAdd inputEl={inputEl} dateEl={dateEl} handleAddNewsListItem={handleAddNewsListItem}/>
      <p id="newsAlert"></p>
    </>
  );
}


//export const App = App;