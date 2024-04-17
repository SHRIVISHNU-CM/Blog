import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './Components/Login'
import Signup from './Components/Signup'
import { LoginContext } from './Context/UserContext'
import Home from './Components/Home'
import Add from './Components/Add'
import Profile from './Components/Profile'
import Edit from './Components/Edit'
import Myblogs from './Components/Myblogs'
function App() {
  const [name, setname] = useState('')
  const [ID, SetID] = useState('')
  const [len, setlen] = useState('')
  return (
    <>
      <LoginContext.Provider value={{ name, setname, ID, SetID, len, setlen }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/home' element={<Home />} />
            <Route path='/myblogs' element={<Myblogs />} />
            <Route path='/add' element={<Add />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>


    </>
  )
}

export default App