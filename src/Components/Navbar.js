import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  const[ navlinkState, setState]= useState('true');
  function handelClick(){
    setState( navlinkState=>!navlinkState)
  }
  let toggleNavlink = navlinkState?'active':'';

 
  return (
   <>

<nav>
        <div className="navbar">
<div className="brand-title">HpTech</div>
<a herf="#" className="toggle-button" onClick={handelClick}>

    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>

</a>
<div className={`navbar-links ${toggleNavlink}`}>
    <ul>
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/about">PROFILE</NavLink></li>
        <li><NavLink to="/register">NEW ACCOUNT</NavLink></li>
        <li><NavLink to="/login">SWITCH ACCOUNT</NavLink></li>
       
        
        
    </ul>
</div>

        </div>
    </nav>
   </>
  )
  }
