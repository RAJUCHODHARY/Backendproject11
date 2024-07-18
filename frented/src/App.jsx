import React, { useState } from 'react' 
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Sign from './Sign'
import Login from './Login'
import Home from './Home'
// import axios from "axios"
function App() {

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/sign' element={<Sign/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
