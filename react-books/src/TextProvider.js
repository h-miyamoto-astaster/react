import React,{createContext} from 'react'

export const TextContext = createContext();

const text = "これはProviderから渡されたテキストです。"
const TextProvider = ({children}) => {
  return (
    <TextContext.Provider value={text}>{children}</TextContext.Provider> 
  )
}

export default TextProvider