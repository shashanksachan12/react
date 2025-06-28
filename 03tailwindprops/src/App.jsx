import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'
function App(props) {
  console.log(props);
  let [count, setCount] = useState(0)
  const add=()=>{setCount(count++)}
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <button onClick={add} className='bg-green-200'>count:{count}</button>
    <div className="flex justify-between">
   <Card  channel="Shashank Sachan" btnText="Click Me ! " src="mypic.jpg"/><Card  channel="Aman Sachan"  btnText="visit my channel !" src="https://media.licdn.com/dms/image/v2/C4E03AQEE2UVIUYxG2w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1591816635607?e=1756339200&v=beta&t=zpbHBapUaZs-4XYYRS3xl_leU0GvtwQzUqUtgmdhKiM"/>
   </div>
    </>
  )
}

export default App
