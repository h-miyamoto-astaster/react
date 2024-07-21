import React,{useContext} from 'react'

import {TextContext} from "./TextProvider";

const Third = () => {
   const textData = useContext(TextContext);
   console.log(textData)
  return (
    <div>
      <p>Thirdコンポーネント:<b>{textData}</b></p>
    </div>
  )
}

export default Third