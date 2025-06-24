import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Instruction from'./Inst.jsx'

function App() {

 let [counter, setCounter]=useState(10);
 const upperlimit=20;
 const lowerlimit=0;
 // let counter=10 ;
 const addValue=()=>{
  if(counter<upperlimit){
  //counter=counter+1;
 // console.log("clicked",counter);
  setCounter(counter+1)}
 }
 const removeValue=()=>{
  if(counter>lowerlimit){
  //counter=counter-1;
  setCounter(counter-1)
  //console.log("clicked",counter);
  }
 }
  return (
    <>
      <h1 id='sha'>Shashank Sachan</h1>
      
      <Instruction />
      <h2>Counter value : {counter}</h2>
      <p className='button-container' >
      <p>Above limit of counter is 20 </p>
      <button onClick={addValue} id='button1'>Add value: {counter}</button>
      <br></br>
      <p>Lower limit of counter is 0 </p>
      <button onClick={removeValue} id='button2'> Delete value:  {counter}</button>
      </p>
      <footer>Footer:{counter}</footer>
    </>
  )
}

export default App
