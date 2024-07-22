import React,{useState,createContext} from 'react'

export const CountContext = createContext();

const CountProvider = ({children}) => {
    const [count,setCount] = useState(0);
  return (
    <CountContext.Provider value={[count,setCount]}>
        {children}
    </CountContext.Provider>
  )
}

export default CountProvider