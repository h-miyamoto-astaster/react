import axios from "axios";

const boardDataUrl = "http://localhost:3100/todos"

export const getAllBoardData = async() =>{
   const response = await axios.get(boardDataUrl)
   return response.data;
}

export const addBoardData = async(write) =>{
   const response = await axios.post(boardDataUrl,write)
   return response.data;
}

export const deleteBoardData = async(id) => {
   await axios.delete(`${boardDataUrl}/${id}`);
   return id;
}
