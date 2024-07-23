import React,{ useState } from 'react';
import CounterA from "./CounterA";
import CounterB from "./CounterB";
import CounterC from "./CounterC";

export default function App(){

  return(
      <>
        <CounterA />
        <CounterB />
        <CounterC />
      </>
  )
};