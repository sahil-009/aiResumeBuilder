import { useState } from 'react'
import { Button } from "@/components/ui/button"
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       click here ! 
      <Button>click me</Button>
    </>
  )
}

export default App
