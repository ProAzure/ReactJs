import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-black bg-green-400 p-4 rounded-xl cursor-pointer hover:bg-green-300 mb-4'>
      hello tailwind</h1>
     <div className="container flex">
     <Card username="supriya" btnText="visit profile"/>
      <Card username="kajal"/>
     </div>
    </>
  )
}

export default App
