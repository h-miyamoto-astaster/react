import {useState,useEffect} from "react";

import {ulid} from "ulid";

import * as boardData from "../api/board";

export const useBoard = () =>{
   const [boardList,setBoardList] = useState([]);

   useEffect(() => {
      boardData.getAllBoardData().then((write) =>{
         setBoardList([...write].reverse());
      });
    },[]);

    const addBoardListItem = (boardContent,username) =>{
      const newBoardItem = {
         content:boardContent,
         id:ulid(),
         name:username
      };

      return boardData.addBoardData(newBoardItem).then((addWrite) =>{
         setBoardList([addWrite,...boardList])
      });
    }

    const deleteBoardListItem = (id) =>{
      boardData.deleteBoardData(id).then((deleteBoardItemId) =>{
         const newBoardList = boardList.filter(
           (item) => item.id !== deleteBoardItemId
         );
         setBoardList(newBoardList);
      })
    }

    return{
      boardList,
      addBoardListItem,
      deleteBoardListItem
    }
}