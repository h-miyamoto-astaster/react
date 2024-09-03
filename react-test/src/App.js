import React, { useState,useEffect,useRef } from "react";

import axios from "axios";

import { useNews } from "./useNews" ;

const newsDataUrl = "http://localhost:3100/news";

const NewsDelete = ({newsId,deleteNewsListItem}) => {
  const handleDleteNewsListItem = () => deleteNewsListItem(newsId);

  return (
    <button onClick={handleDleteNewsListItem}>削除</button> 
  );
}

const NewsAdd = ({ inputEl,dateEl,handleAddNewsListItem }) => {
  return (
    <>
      <textarea ref={inputEl} />
      <textarea ref={dateEl} />
      <button onClick={handleAddNewsListItem}>Newsを追加</button>
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
    if(inputEl.current.value === "" || dateEl.current.value === ""){
      alertArea.textContent = "日付と内容を入力してください";
      return;
    };
    addNewsListItem(inputEl.current.value,dateEl.current.value);
    inputEl.current.value = "";
    dateEl.current.value = "";
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