import React from 'react'
import {useState} from "react"

const Textinput = () => {
   const [name,setName] = useState();

   const handleName = (event) => {
      console.log(event.target.value)
      setName(event.target.value);
   }

  return (
    <div>
      <input onChange={(event) => handleName(event)} type={"text"} value={name} />
    </div>
  )
}

export default Textinput