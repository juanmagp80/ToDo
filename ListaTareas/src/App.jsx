import { useState } from 'react'
import './App.css'
import Tasklist from './Components/Tasklist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex items-center justify-center min-h-screen h-full bg-gray-200 '>
      <div className='bg-white p-8 rounded-lg shadow-lg' style={{height: '80vh', width: '50vw'}} >  
        <h1 className='text-2xl font-bold mb- text-center w-full'>Lista de Tareas</h1>
      <Tasklist />
    
      </div>
      </div>
    </>
  )
}

export default App
