import React from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'






export default function App() {
  let routers = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { path: '', element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'portifolio', element: <Portfolio /> },
        { path: 'contact', element: <Contact /> }
      ]
    },
  ])

  return (
    <RouterProvider router={routers}>


    </RouterProvider>



  )





}
