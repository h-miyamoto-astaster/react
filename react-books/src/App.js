import { useState,useEffect } from "react";
import { useBoard } from "./hooks/useBoard";

const boardDataUrl = "http://localhost:3100/todos"

const WriteTitle = ({title,as}) =>{
  if(as === "h1") return <h1>{title}</h1>
  if(as === "h2") return <h2>{title}</h2>
  return <p>{title}</p>
};

const BoardItem = ({write}) =>{
  return(
    <li>
      {write.content}
      <button>{write.done ? "未完了リストへ": "完了リストへ"}</button>
      <button>削除</button>
    </li>
  )
}

function App() {
  const  {boardList} = useBoard();
  console.log("Boardリスト",boardList);
  return (
    <>
      <writeTitle title="React掲示板" as="h1"/>

      <textarea />

      <button>書き込む</button>

      <writeTitle title="書き込み" as="h2"/>

      <ul>
        {boardList.map((write) => (
          <BoardItem write={write} key={write.id} />
        ))}
      </ul>
    </>
  );
}

export default App;
