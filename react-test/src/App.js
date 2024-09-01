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

const NewsAdd = ({ inputEl,handleAddNewsListItem }) => {
  return (
    <>
      <textarea ref={inputEl} />
      <button onClick={handleAddNewsListItem}>Newsを追加</button>
    </>
  )
}

export function App() {
  const [newsList,setNewsList] = useState([]);

  useEffect(() => {
    const fetchData = async() =>{

      const response = await axios.get(newsDataUrl);
      setNewsList(response.data);
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
  const {newsList,addNewsListItem,deleteNewsListItem} = useNews();

  const inputEl = useRef(null);

  const handleAddNewsListItem = () =>{
    if(inputEl.current.value === "") return;
    addNewsListItem(inputEl.current.value);
    inputEl.current.value = "";
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

      <NewsAdd />
    </>
  );
}


//export const App = App;