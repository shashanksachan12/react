import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }

    if (characterAllowed) {
      str += "!@#$%^&*()-_=+[]{}~'"
    }

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length)
      pass += str.charAt(index)
    }

    setPassword(pass)
    setCopied(false) // Reset copied status on new generation
  }, [length, numberAllowed, characterAllowed])

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Show "Copied!" for 2 seconds
  }

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 text-orange-500 bg-gray-800 mt-10'>
        <h1 className="text-2xl font-bold text-center mb-4">Password Generator</h1>

        <div className="mb-4">
          <label className="block mb-2">Password Length: {length}</label>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <span>Include Numbers</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={characterAllowed}
              onChange={() => setCharacterAllowed(prev => !prev)}
            />
            <span>Include Symbols</span>
          </label>
        </div>

        <div className="mb-4">
          <button
            onClick={passwordGenerator}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full"
          >
            Generate Password
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-gray-700 p-2 rounded text-white font-mono flex-1 text-center">
            {password}
          </div>
          <button
            onClick={copyToClipboard}
            className="border-2 border-white bg-black text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
