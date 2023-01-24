import React,{useState} from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import Footer from './footer';

import { useCookies } from 'react-cookie';


export default function Login() {
  const [cookies, setCookie] = useCookies(['user']);
  const handle = () => {
    setCookie('jwtoken', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NkZjA1NGFmZGYyNmFhMTRlYTQzOTEiLCJpYXQiOjE2NzQ0OTk3Njl9.4TNxrPX5YIhYvf3mOmoF61Xmj0A8GnWbrFgVNWuL-14", { path: '/' });
  };


  const  [email,setEmail]=useState('')
  const  [password,setPassword]=useState('')
  const navigate = useNavigate();

  const LoginUser=async (e)=>{
    e.preventDefault();
    // console.log("A")
  

    const res= await fetch("https://iot-backend-xvij.onrender.com/signin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      mode:"cors",
    body:JSON.stringify({email ,password },
      { credentials: 'include'},
      )

    })
    const data = res.json();

    if(res.status===400 || !data){
      window.alert("cant login")
    }else{
      window.alert("login succesful");
      navigate("/about")
      handle();
    }
  }
  return (
   <>
 <section className='center' >
      <h1>Login</h1>
      <form method='POST'>

      
      <div className='txt-field'>
      <input type='text'  name = 'email' required placeholder="your email" autoComplete='off'
      value={email}
      onChange={(e)=>setEmail(e.target.value)} />
       <label htmlFor='name'><i class="zmdi zmdi-email"></i></label>
      </div>


      <div className='txt-field'>
      <input type='text'  name = 'password' required placeholder="password" autoComplete='off' 
             value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
       <label htmlFor='name'> <i class="zmdi zmdi-shield-security"></i></label>
      </div>


      <br/>
      <NavLink className="nav-link" to="/register">Don't have an account </NavLink>
     <br/>
    
      <div className='form-group'>
      <input type="submit" name="signin" className='form-submit mb-1 ' value='Log In' onClick={LoginUser}/>

      </div>
 </form>

</section>
 {/* <Footer/> */}
   </>
  )
}
