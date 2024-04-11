import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './Components/Login'
import Signup from './Components/Signup'
import { LoginContext } from './Context/UserContext'
import Home from './Components/Home'
function App() {
  const [ name, setname] = useState('')
  const [ ID , SetID] = useState('')
  return (
    <> 
      <LoginContext.Provider value={{name,setname, ID, SetID}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/home' element={<Home/>}/>

          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>


    </>
  )
}

export default App