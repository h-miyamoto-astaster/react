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
  `;
  
  const NameField = styled.div`
    font-size:13px;
    color:#0e0e6e;
  `;
  
  const ContentField = styled.div`
    margin-top:10px;  
    font-size:16px;
  `;

  const Btn02 = styled.button`
    display:block;
    width:75px;
    height:25px;
    border-radius:12.5px;
    background-color:orange;
    color:white;
    border:1px solid orange;
    margin-top:15px;
    margin-left:auto;
    cursor:pointer;
    transition:all 0.3s;
    &:hover{
      color:orange;
      background-color:white;
    }
  `;
  return(
    <Box01>
      <NameField>{write.name}</NameField>
      <ContentField>{write.content}</ContentField>
      <Btn02 onClick={handleDeleteBoardListItem}>削除</Btn02>
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
  `;

  const WriteArea = styled.div`
    border-top:1px solid dimgray;
  `;

  const NameTextarea = styled.input`
    display:block;
    width:98%;
    padding:5px;
    border:1px solid dimgray;
    border-radius:5px 5px 0px 0px;
    &:placeholder{
      color:silver;
    }
  `;

  const WriteTextarea = styled.textarea`
    display:block;
    width:100%;
  `;
  return (
    <>
      <div className="boardWrap">
        <WriteTitle title="React掲示板" as="h1"/>

        <WriteTitle title="書き込み" as="h2"/>

        <div>
          {boardList.map((write) => (
            <BoardItem write={write} key={write.id} deleteBoardListItem={deleteBoardListItem}/>
          ))}
        </div>
        
        <WriteArea>
          <NameTextarea ref={nameEl} placeholder="名前"/>

          <WriteTextarea ref={inputEl} />

          <Btn01 onClick={handleAddBoardListItem}>書き込む</Btn01>
        </WriteArea>
      </div>
    </>
  );
}

export default App;
