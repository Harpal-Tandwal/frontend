import React ,{useState}from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import Footer from './footer';
export default function Signup() {
  const  navigate = useNavigate();
const [user, setUser]= useState({
  name:"",email:"",phone:"", work:"",password:"",cpassword:""
});
let name , value
const handelInputs =(e)=>{
  // console.log(e);
  name=e.target.name;
  value=e.target.value
  setUser({...user,[name]:value})

}
const postData = async (e)=>{
  e.preventDefault();
  const {name,email, phone,work,password,cpassword}= user
  console.log(user)
   const res= await fetch("https://iot-backend-xvij.onrender.com/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
  
    body:JSON.stringify({name,email, phone,work,password,cpassword})//both key and value are same =>object destructuring
   })
   
  //  const data= res.json();
   console.log(res)

   if(res.status===200 ){
    window.alert("registration SUCCECFUL")
    console.log("registration SUCCESFUL")
    navigate("/login")
   }   
   if(res.status===422 || !res){
    window.alert("invalid registration")
    console.log("invalid registration")
   }
}
  return (

   <>
    <section className='center' >
      <h1>New Account</h1>
      <form method='POST'>

      <div className='txt-field'>
      <input type='text'  name = 'name' required placeholder="your name" autoComplete='off'
       value={user.name}
      onChange={handelInputs}  />
      <label htmlFor='name'>  <i class="zmdi zmdi-account"></i></label>
      </div>

      <div className='txt-field'>
      <input type='text'  name = 'email' required placeholder="your email" autoComplete='off' 
        value={user.email}
      onChange={handelInputs}
      />
       <label htmlFor='email'><i class="zmdi zmdi-email"></i></label>
      </div>

   
      <div className='txt-field'>
      <input type='number'  name = 'phone' required placeholder="your phone number" autoComplete='off' 
        value={user.phone}
      onChange={handelInputs}
      />
       <label htmlFor='phone'> <i class="zmdi zmdi-phone-ring"></i></label>
      
      </div>
      <div className='txt-field'>
      <input type='text'  name = 'work' required placeholder="Work" autoComplete='off' 
        value={user.work}
      onChange={handelInputs}
      />
           <label htmlFor='work'> <i class="zmdi zmdi-assignment"></i></label>
      </div>

      <div className='txt-field'>
      <input type='text'  name = 'password' required placeholder="password" autoComplete='off'
      value={user.password}
      onChange={handelInputs}/>

       <label htmlFor='password'> <i class="zmdi zmdi-shield-security"></i></label>
      </div>

      <div className='txt-field'>
      <input type='text'  name = 'cpassword' required placeholder="conform password" autoComplete='off'
      value={user.cpassword}
      onChange={handelInputs} />

       <label htmlFor='cpassword'>  <i class="zmdi zmdi-shield-check"></i></label>
      </div>

      <br/>
      <NavLink className="nav-link" to="/login">Already have an accoint </NavLink>
     <br/>
          

      {/* <div className='txt-field'>  
      <input type='submit'  value='register'/>
      </div> */}
      <div className='form-group'>
      <input type="submit" name="signup" className='form-submit mb-1 ' value='register' style={{"fontSize":22, "padding":16}} onClick={postData}/ >

      </div>


      </form>
     
    </section>
    {/* <Footer/> */}
   </>
  )
}