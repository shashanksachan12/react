import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from './Chai'
import Welcome from './Wlcm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>Shashank Sachan</p>
      <Chai />
      <Welcome />
    </>
  )
}

export default App
