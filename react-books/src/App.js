import { createContext,useContext } from 'react';
import CountProvider  from "./CountProvider";
import {First} from "./First";

export default function App(){

  return(
    <div className="App">
      <CountProvider>
        <First />
      </CountProvider>
    </div>
  )
};
