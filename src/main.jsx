import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider,Route, } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children : [
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/features',
        element:<h1>Features</h1>
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/contact',
        element:<h1>Contact</h1>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
