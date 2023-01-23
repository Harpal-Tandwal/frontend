import React from 'react'
import { NavLink } from 'react-router-dom'
import {VscGithub} from 'react-icons/vsc'
import {BsYoutube} from 'react-icons/bs'
import Footer from './footer'
export default function Home() {
  return <>
  <center>
        <div class="container-home">
        
        <NavLink to="/kit"  className="links" >About Home Automation Kit </NavLink>
        <h1 class="brand-name" >HpTech </h1>
        <NavLink to="/devguide"  className="links">Quick Start For IoT Developers</NavLink>
        </div>
       
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <p style={{color:"white",textAlign: "center"}}>We love To Connect the World</p>
        <div className='icon-container'>
        <a href='https://github.com/Harpal-Tandwal/HpTech' className='icon'><VscGithub color='green' size={"100px"}/></a>
        <a href='https://www.youtube.com/playlist?list=PLWDMo2TlEbZdX3Gc9DDhWWaOXNZkFXhKi' className='icon'> <BsYoutube color='green' size={"100px"}/> </a>

        </div>
        </center>
<Footer/>

      </>
  
}
