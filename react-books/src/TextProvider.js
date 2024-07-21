import React,{useContext} from 'react'

export const TextContext = createContext();

const text = "これはProviderから渡されたテキストです。"
const TextProvider = ({children}) => {
  return (
    <TextContent.Provider value={text}>{children}</TextContent.Provider> 
  )
}

export default TextProvider