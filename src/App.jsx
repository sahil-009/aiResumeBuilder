import { useState } from 'react'
import { Button } from "@/components/ui/button"
import './App.css'
import { Outlet } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Outlet/>
    </>
  )
}

export default App
