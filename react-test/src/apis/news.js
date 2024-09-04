import axios from "axios";

const newsDataUrl = "http://localhost:3100/news";

export const getAllNewsData = async() =>{
   
   const response = await axios.get(newsDataUrl);
   
   return response.data;
}

export const addNewsData = async(newses) =>{
   
   const response = await axios.post(newsDataUrl,newses);
   
   return response.data;
}

export const deleteNewsData = async(id) =>{
   await axios.delete(`${newsDataUrl}/${id}`);

   return id;
}