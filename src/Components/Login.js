import React,{useState} from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import Footer from './footer';



const BASE_URL = "https://iot-backend-xvij.onrender.com";
// const BASE_URL = "http://localhost:5000";
export default function Login() {

  var Cookie =
{
   set: function(name, value, days)
   {
      var domain, domainParts, date, expires, host;

      if (days)
      {
         date = new Date();
         date.setTime(date.getTime()+(days*24*60*60*1000));
         expires = "; expires="+date.toGMTString();
      }
      else
      {
         expires = "";
      }

      host = window.location.host;
      if (host.split('.').length === 1)
      {
         // no "." in a domain - it's localhost or something similar
         document.cookie = name+"="+value+expires+"; path=/";
      }
      else
      {
         // Remember the cookie on all subdomains.
          //
         // Start with trying to set cookie to the top domain.
         // (example: if user is on foo.com, try to set
         //  cookie to domain ".com")
         //
         // If the cookie will not be set, it means ".com"
         // is a top level domain and we need to
         // set the cookie to ".foo.com"
         domainParts = host.split('.');
         domainParts.shift();
         domain = '.'+domainParts.join('.');

         document.cookie = name+"="+value+expires+"; path=/; domain="+domain;

         // check if cookie was successfuly set to the given domain
         // (otherwise it was a Top-Level Domain)
         if (Cookie.get(name) == null || Cookie.get(name) != value)
         {
            // append "." to current domain
            domain = '.'+host;
            document.cookie = name+"="+value+expires+"; path=/; domain="+domain;
         }
      }
   },

   get: function(name)
   {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i=0; i < ca.length; i++)
      {
         var c = ca[i];
         while (c.charAt(0)==' ')
         {
            c = c.substring(1,c.length);
         }

         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
   },

   erase: function(name)
   {
      Cookie.set(name, '', -1);
   }
};


  const  [email,setEmail]=useState('')
  const  [password,setPassword]=useState('')
  const navigate = useNavigate();

  const LoginUser=async (e)=>{
    e.preventDefault();
    // console.log("A")


    const res= await fetch(BASE_URL+"/signin",{ //https://iot-backend-xvij.onrender.com
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      mode:"cors",
    body:JSON.stringify({email ,password },
      { credentials: 'include'},
      )

    })
   
    const data =  await res.json();
 
console.log( " data get from login request",data.token)
    if(res.status===400 || !data){
      window.alert("cant login")
    }else{
      window.alert("login succesful");
      navigate("/about")
      Cookie.set('jwtoken', data.token ,"5");
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
