import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const shinCodeInfo = {
  name:"shinCode",
  age:24
}

const shinCodeContext = createContext(shinCodeInfo)

ReactDOM.createRoot(document.getElementById('root')).render(
  <shinCodeContext value={shinCodeInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </shinCodeContext>
)

export default shinCodeContext