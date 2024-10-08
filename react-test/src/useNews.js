import React, { useState,useEffect } from "react";

import {ulid} from "ulid";

import * as newsData from "./apis/news";

export const useNews = () =>{
   const [newsList,setNewsList] = useState([]);

   useEffect(() => {
      newsData.getAllNewsData().then((newses) =>{
         setNewsList([...newses].reverse());
      });
   },[]);

   const addNewsListItem = (newsContent,newsDate) => {
      const newNewsItem = {
         content:newsContent,
         id:ulid(),
         date:newsDate
      };

      return newsData.addNewsData(newNewsItem).then((addNews) =>{
         setNewsList([addNews,...newsList]);
      });
   };

   const deleteNewsListItem = (id) =>{
      newsData.deleteNewsData(id).then((deleteNewsItemId) =>{
         const newNewsList = newsList.filter(
            (item) => item.id !== deleteNewsItemId
         );
         setNewsList(newNewsList);
      });
   }

   return {newsList,addNewsListItem,deleteNewsListItem};
}