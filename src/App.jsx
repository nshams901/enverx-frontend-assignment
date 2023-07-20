import { useState } from 'react'
import SideNav from './layout/SideNav'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Wallet from './pages/Wallet'
import { router } from './router'

function App() {
  return (
    <>
    
      <RouterProvider router={router}/>
    </>
  )
}

export default App
