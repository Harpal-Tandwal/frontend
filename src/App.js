import React from 'react'
import './App.css'
import Errorpage from './Components/Errorpage'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Login from './Components/Login';
import Signup from './Components/Signup';
import About from './Components/About'
import {  Route, Routes } from 'react-router-dom'
import Devguide from './Components/Devguide'
import Kit from './Components/Kit'
export default function App() {
  return (
    <>
   <Navbar/>
  <Routes>
  <Route path="/" element={<Home />}/>

  <Route path="/about" element={<About />}/>

  <Route path="/contact" element={< Contact />}/>

<Route path="/login" element={<Login />}/>

<Route path="/register" element={<Signup />}/>
<Route path ="/devguide" element ={<Devguide/>}/>
<Route path ="/kit" element ={<Kit/>}/>
<Route path="*" element={<Errorpage />}/>




</Routes>

    </>
  )
}
