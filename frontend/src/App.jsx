import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './Components/Login'
import Signup from './Components/Signup'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup/>} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App