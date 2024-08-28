import React, { useState,useEffect } from "react";

import axios from "axios";

const newsDataUrl = "http://localhost:3100/news";

import { useNews } from "./useNews" ;

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
  const [newsList,setNewsList] = useState([]);

  useEffect(() => {
    const fetchData = async() =>{

      const response = await axios.get(newsDataUrl);
      setNewsList(response.data);
    };
    fetchData();
  },[]);
  console.log("これはadminapp");

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


//export const App = App;