import { createContext,useContext } from 'react';

import {First} from "./First";

export default function App(){

  return(
    <div className="App">
      <TextProvider>
        <First />
      </TextProvider>
    </div>
  )
};
