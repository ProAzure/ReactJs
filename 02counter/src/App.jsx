import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  
  function addValue(){
    if(counter>=19){
      setCounter(counter=19)
    }
    counter=counter+1
    setCounter(counter)
    console.log('clicked',counter);
  }
  function removeValue(){
    if(counter<1){
      setCounter(counter=1)
    }
    counter=counter-1
    setCounter(counter)
    console.log('clicked',counter);
  }
  return (
    <>
    <h1>counter Project</h1>
    <h2>Counter Value  {counter}</h2>
    <button
    onClick={addValue}
    >Add Value {counter}</button><br /> <br />
    <button
    onClick={removeValue}
    >Remove Value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
