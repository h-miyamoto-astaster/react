import React from 'react'

const Hello = ({
    name,
    handleChangeName,
    INITIAL_NAME
}) => {
  return (
    <div className="App">
        <p>
            Hello,<b>{name}!!</b>
            <br />
            nameの初期値:<b>{INITIAL_NAME}</b>
        </p>
        <input type="text" onChange={handleChangeName} />
    </div>
  )
}

export default Hello