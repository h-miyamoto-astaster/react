import { useRef } from "react";
import { useBoard } from "./hooks/useBoard";


const WriteTitle = ({title,as}) =>{
  if(as === "h1") return <h1>{title}</h1>
  if(as === "h2") return <h2>{title}</h2>
  return <p>{title}</p>
};

const BoardItem = ({write,deleteBoardListItem}) =>{

  const handleDeleteBoardListItem = () =>{
    deleteBoardListItem(write.id);
  }
  return(
    <li>
      {write.content}
      <div>{write.name}</div>
      <button onClick={handleDeleteBoardListItem}>削除</button>
    </li>
  )
}

function App() {
  const  {boardList,addBoardListItem,deleteBoardListItem} = useBoard();
  console.log("Boardリスト",boardList);
  const inputEl = useRef(null);
  const nameEl = useRef(null);

  const handleAddBoardListItem = () =>{
    if(inputEl.current.value === "") return;
    if(nameEl.current.value === "") {
      nameEl.current.value = "名無しさん"
    };
    addBoardListItem(inputEl.current.value,nameEl.current.value);
    inputEl.current.value="";
    nameEl.current.value="";
  }

  return (
    <>
      <WriteTitle title="React掲示板" as="h1"/>

      <textarea ref={inputEl} />

      <textarea ref={nameEl} />

      <button onClick={handleAddBoardListItem}>書き込む</button>

      <WriteTitle title="書き込み" as="h2"/>

      <ul>
        {boardList.map((write) => (
          <BoardItem write={write} key={write.id} deleteBoardListItem={deleteBoardListItem}/>
        ))}
      </ul>
    </>
  );
}

export default App;
