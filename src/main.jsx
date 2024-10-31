import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'


// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


import { Home } from './home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './dashboard';

const router = createBrowserRouter([

  {  
    element: <App/>,
    children:
     [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },


    ]
  },


  

  {
    path: "/auth/sign-in",
    element: <signInPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
)
