import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './footer'
const About=() =>{

  const[userData,setUserData]= useState("");
  const  [email,setEmail]=useState('');
  const  [projectName,setprojectName]=useState('');
  const [prjct,setProjects]= useState("");


  const navigate = useNavigate();

 
 const callAboutPage = async()=>{
  try{
    
    const res= await fetch("https://iot-backend-xvij.onrender.com/aboutme",{
      method:"GET",
      headers:{
        // Accept:"application/json",
       "Content-Type":"application/json"
      },
      mode:"cors",
      credentials: 'include'
    });
    const data = await res.json();
    console.log(data.email);
    setEmail(data.email)
    setUserData(data);
    if(!res.status===200){
      const error = new Error (res.error);
      throw error;
      navigate("/login")
    }

  }catch(err){
    console.log(err);
    navigate("/login");
  }
 }

//  **************load projects************
const loadProjects = async()=>{
  try{
    const res = await fetch("https://iot-backend-xvij.onrender.com/showprojects",{
      method:"GET",
      headers:{
        Accept:"application/json",
       "Content-Type":"application/json"
      },
      credentials: 'include'
    });
    const projects = await res.json();
    // console.log(projects);
    
    setProjects(projects);
    if(!res.status===200){
      const error = new Error (res.error);
      throw error;
     
    }

  }catch(err){
    console.log(err);
   
  }
 }

 //****************CREATE NEW PROJECT */
 
 const createProject=async (e)=>{
  e.preventDefault();
  const res = await fetch("https://iot-backend-xvij.onrender.com/createproject",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({email ,projectName })

  })
  if(res.status===400 || !res){
    window.alert("something went WRONG ...cant create project")
  }else{
    console.log(res)
    window.alert("PROJECT created  succesful");
    loadProjects();
    
  }
  
}
//*****************UPDATE AND SPECIFIC FIELD ON  A PROJECT */

const updateOne= async (key,obj)=>{
   let field= Object.keys(obj)[0];
  let presentValue = Object.values(obj)[0];
   let newValue =document.getElementsByClassName(field)[0].value
  

   const status ={
    key:key,
    field: field,
    presentValue:presentValue,
    newValue:newValue
   }
   console.log(status)
  const res = await fetch("https://iot-backend-xvij.onrender.com/updateone",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
 body:JSON.stringify(status)
  })
 const data = res.json()
 if(res.status === 400 || !data)
 window.alert("something went wrong")
 else{
  loadProjects();
 }
  
}
 useEffect(()=>{
  callAboutPage();
  loadProjects();

 },[])
 

  return (
   <>
    <center>
      
   <div className='about-container'>
 <section className='newProject-form' >
      <h1>NEW PROJECT</h1>
      <form method='POST'>
      <div className='txt-field'>
      <input type='text'  name = 'projectName' required placeholder="projectName" 
             autoComplete='off' 
             value={projectName} onChange={(e)=>setprojectName(e.target.value)}/>
      <label htmlFor='name'> <i class="zmdi zmdi-shield-security"></i></label>
      </div>
      <br/>
      <br/>
      <div className='form-group'>
      <input type="submit" name="signin" className='form-submit mb-1 ' value='CREATE ' onClick={createProject}/>

      </div>
 </form>
</section>




      {prjct.length > 0 && (
        
        <div className='projectContainer'>
        <ul>
          {prjct.map(user => (
          
          <li className='projectInfo' >
              <h1 className='projectInfo-elements'> Project name : {user.projectName} </h1>
              <h1 className='projectInfo-elements' > Secret KEY : {user._id} </h1>
              <h2  >status:</h2>
                <div>
                {user.info.map((sup)=><h1 className='projectInfo-elements'>
                {Object.keys(sup)}:{Object.values(sup)} <br/>
                 <input type="text" className={Object.keys(sup)[0]} placeholder= {`  change ${Object.keys(sup)} value`} style={{color:'red'}}/>

                 <button onClick={event=>(updateOne(user._id,sup))}>UPDATE</button>
                 </h1>
                )}
                

                </div>
           </li>
            
          ))}
        </ul>
        
       
        </div>
      )}
      <div className='reload-btn'>
        <button className='load-project-button' onClick={loadProjects}>Reload data</button>
        </div>
   </div> 
 {console.log(document.querySelector('projectInfo-elements'))}
   
    </center>
    {/* <Footer/> */}
   </>
  )
}

export default About;
