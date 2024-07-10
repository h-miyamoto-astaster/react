import React from 'react'
import {useState} from 'react'

const ToggleButton = () => {
   const [open,setOpen] = useState(false);

   const toggle = () => {
      setOpen(prevState => !prevState)
   }

  return (
    <div>
      <button onClick={toggle}>
         {open ? "OPEN":"CLOSE"}
      </button>
    </div>
  )
}

export default ToggleButton