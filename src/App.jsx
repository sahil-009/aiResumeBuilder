import { useState } from 'react'
import { Button } from "@/components/ui/button"
import './App.css'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'



function App() {
  const [count, setCount] = useState(0)
  const {user,isLoaded,isSignedIn} = useUser()

  if (!isLoaded) {
    return <Navigate to = "/auth/sign-in"/>
  }
  return (

    <Outlet/>

  )
}

export default App
