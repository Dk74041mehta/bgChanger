import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")
  

  return (
    <>
    <div className='w-full h-screen duration-200 }' 
    
    style={{backgroundColor:color }}>

<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>


  <div className=' flex flex-wrap justify-center gap-8 shadow-lg bg-white px-3 py-2 rounded'>

    <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"gray"}}  onClick={ ()=>setColor("gray")}>gray</button>

    <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"red"}} onClick={ ()=>setColor("red")}>red</button>


    <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"olive"}} onClick={ ()=>setColor("olive")}>olive</button>

    
    <button className='outline-none border-4 border-cyan-500 px-4 py-1 rounded-full text-black shadow-sm ' style={{backgroundColor:"white"}} onClick={ ()=>setColor("white")}>white</button>


    <button className='outline-none px-4 py-1 rounded-full text-black shadow-sm' style={{backgroundColor:"yellow"}} onClick={ ()=>setColor("yellow")}>yellow</button>

    <button className='outline-none px-4 py-1 rounded-full text-Black shadow-sm' style={{backgroundColor:"pink"}} onClick={ ()=>setColor("pink")}>pink</button>

    <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"orange"}} onClick={ ()=>setColor("orange")}>orange</button>

    <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"green"}}  onClick={ ()=>setColor("green")}>green</button>

  </div>
  


</div>


    </div>
    </>
  )
}

export default App


//for using style use 2 curly braces