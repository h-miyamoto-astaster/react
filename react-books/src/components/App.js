import React,{ useState } from 'react';
import axios from "axios";

export default function App(){
  const fetchData = async () =>{
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return console.log(response.data);
  }
  fetchData();
  return(
      <>
        <p>これからTodoアプリを実装します。</p>
      </>
  )
};