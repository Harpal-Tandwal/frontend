import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import register_page from '../images/register_page.png'
import login_page from '../images/login_page.png';
import profile_page from '../images/profile_page.png';
import demo_project from '../images/demo_project.png';
import webpage_secret_key from '../images/webpage_secret_key.png'
import control_pannel from '../images/control_pannel.png'
import Footer from './footer';
import { NavLink } from 'react-router-dom'
const   Kit=() =>{
  const[userData,setUserData]= useState("");
  const navigate = useNavigate();
 const PostStatus = async()=>{
  try{
    const res = await fetch("https://iot-backend-xvij.onrender.com/status",{
      method:"POST",
      headers:{
        Accept:"application/json",
       "Content-Type":"application/json"
      },
      credentials: 'include',
      body:JSON.stringify({Led:0})//both key and value are same =>object destructuring

    });


  }catch(err){
    console.log(err);
    // navigate("/login");
  }
 }
//  useEffect(()=>{
//   // callAboutPage();

//  },[])
  return (
   <>
   <center className="homepage"> 
   <div className='section1'>
    <h2>Welcome to HpTech</h2>
    <p> create new projects and automate things easily</p>
    </div>

    <div className='section2'>
     <h2> Follow these few steps to setup your automation kit</h2>
     <p> Go to register and create your new account.</p>
      <img src={register_page}  alt="regiter page pic"/>

     <hr/>

      <p> Now login to your account</p>
      <img src={login_page}  alt="login page pic"/>

      <hr/>

      <h2> After login you will  land on your personal profile page</h2>
      <img src={demo_project} alt="profile page image"/>
      
      <hr/>

      <h3> Create your first project</h3>
      <p> Enter project name</p>
      <p> Click on create</p> 

      <img  src={profile_page} alt="demo project image"/>
      <h3> Congratulations !!! you  successfully created your first project</h3>

      <hr/>
      <h2>SETTING UP HpTech-Automation module </h2>
      <p> You  get a secret key of your project using this key you can communicate with your project</p>
      <img src={webpage_secret_key}/>

       <hr/>

       <p> After setting secret key We are ready to control our Appliances</p>
       <img src={control_pannel} alt="control pannel pic"/>
       <p> Now you can update realy names according to your Appliances </p>
      
      
       </div> 
       <hr/>
       <section className='note-container'>
   <span className='note'> NOTE</span>
   <span> IF YOU CHANGE THE SECRET KEY OF YOUR MODULE ,THE MODULE GET RESET</span>


       </section>
      <Footer/>
   </center>
   </>
  )
}

export default Kit;