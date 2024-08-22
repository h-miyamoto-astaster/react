import { useRef,useEffect } from "react";
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
  let writeMax = 8;
  const inputEl = useRef(null);
  const nameEl = useRef(null);

  const handleAddBoardListItem = () =>{
    let writeLen = boardList.length;
    if(writeLen > writeMax) {
      document.querySelector("#writeAlert").textContent= "※これ以上書き込めません";
      return;
    };
    if(inputEl.current.value === "") return;

    if(nameEl.current.value === "") {
      nameEl.current.value = "名無しさん"
    };
    addBoardListItem(inputEl.current.value,nameEl.current.value);
    inputEl.current.value="";
    nameEl.current.value="";
  }

  const WriteMaxText = () =>{
    useEffect(() => {
       document.querySelector("#writeLimit").textContent= `※書き込みは${writeMax}件までです。`;
     },[]);
     return(
       <p id="writeLimit"></p>
     )
 }

  const Btn01 = styled.button`
    display:block;
    width:250px;
    height:35px;
    line-height:35px;
    margin:auto;
    margin-top:20px;
    padding:0px 15px;
    font-size:16px;
    cursor:pointer;
  `;

  const WriteArea = styled.div`
    border-top:1px solid dimgray;
  `;

  const NameTextarea = styled.input`
    display:block;
    width:100%;
    padding:5px;
    border:1px solid dimgray;
    border-radius:5px 5px 0px 0px;
    box-sizing:border-box;
    &:placeholder{
      color:silver;
    }
  `;

  const WriteTextarea = styled.textarea`
    display:block;
    width:100%;
    height:200px;
    box-sizing:border-box;
  `;
  return (
    <>
      <div className="boardWrap">
        <WriteTitle className="mainTitle" title="React掲示板" as="h1"/>

        <div className="boardArea">

          <div>
            {boardList.map((write) => (
              <BoardItem write={write} key={write.id} deleteBoardListItem={deleteBoardListItem}/>
            ))}
          </div>
          
          <WriteArea>
            <WriteTitle title="書き込み" as="h2"/>
            <NameTextarea ref={nameEl} placeholder="名前"/>

            <WriteTextarea ref={inputEl} />

            <Btn01 onClick={handleAddBoardListItem}>書き込む</Btn01>
            {/*<p id="writeLimit"></p>*/}
            <WriteMaxText />
            <p id="writeAlert"></p>
          </WriteArea>
        </div>
      </div>
    </>
  );
}

export default App;
