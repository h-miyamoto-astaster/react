import { useRef } from "react";
import { useBoard } from "./hooks/useBoard";
import styled from 'styled-components';


const WriteTitle = ({title,as}) =>{
  if(as === "h1") return <h1>{title}</h1>
  if(as === "h2") return <h2>{title}</h2>
  return <p>{title}</p>
};

const BoardItem = ({write,deleteBoardListItem}) =>{

  const handleDeleteBoardListItem = () =>{
    deleteBoardListItem(write.id);
  }
  const Box01 = styled.div`
    padding:15px 10px;
    border-top:1px solid dimgray;
  `
  return(
    <Box01>
      {write.content}
      <div>{write.name}</div>
      <button onClick={handleDeleteBoardListItem}>削除</button>
    </Box01>
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

  const Btn01 = styled.button`
  display:block;
  width:300px;
  height:35px;
  line-height:35px;
  margin:auto;
  margin-top:50px;
  padding:0px 15px;
  font-size:16px;
  font-weight:bold;
  cursor:pointer;
`

  return (
    <>
      <div className="boardWrap">
        <WriteTitle title="React掲示板" as="h1"/>

        <textarea ref={inputEl} />

        <textarea ref={nameEl} />

        <Btn01 onClick={handleAddBoardListItem}>書き込む</Btn01>

        <WriteTitle title="書き込み" as="h2"/>

        <div>
          {boardList.map((write) => (
            <BoardItem write={write} key={write.id} deleteBoardListItem={deleteBoardListItem}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
