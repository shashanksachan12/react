import { useState } from 'react'
import './App.css'
import Button from './component/Button.jsx'
import Content from './component/Content.jsx'
import Gap from './component/Gap.jsx'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <h1 className='text-7xl text-white'><b>Shashank Sachan</b></h1>
      <h3 className='text-3xl text-white'>You can change your <u><b>Background Color</b></u> of window</h3>
      
      <Gap/>

     <Content />
      <div className="fixed flex flex-wrap justify-center bottom-12 rounded-xl gap-2 inset-x-0 px-2">
       
          <Button buttonColor="bg-blue-500" btnText="BLUE" onClick={() => setColor("blue")} />
          <Button buttonColor="bg-green-400" btnText="GREEN" onClick={() => setColor("green")} />
          <Button buttonColor="bg-red-500" btnText="RED" onClick={() => setColor("red")} />
          <Button buttonColor="bg-yellow-300" btnText="YELLOW" onClick={() => setColor("yellow")} />
          <Button buttonColor="bg-purple-500" btnText="PURPLE" onClick={() => setColor("purple")} />
          <Button buttonColor="bg-pink-400" btnText="PINK" onClick={() => setColor("pink")} />
          <Button buttonColor="bg-gray-600" btnText="GRAY" onClick={() => setColor("gray")} />
          <Button buttonColor="bg-orange-500" btnText="ORANGE" onClick={() => setColor("orange")} />
          <Button buttonColor="bg-teal-400" btnText="TEAL" onClick={() => setColor("teal")} />
          <Button buttonColor="bg-indigo-500" btnText="INDIGO" onClick={() => setColor("indigo")} />
        </div>
        <Gap/>
        <p>Instruction:You cam click on given buttons for change background color of window</p>
      </div>
    
  )
}

export default App
