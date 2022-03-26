import React from 'react'
import './login.css';
import {NavLink} from "react-router-dom"
const Login = () => {
    return (
        <>
             <div className="login_main_div">
             {/* <head>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet" />
  
  <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
</head> */}

{/* <img class='background-img' src='https://i.pinimg.com/736x/ca/6b/0f/ca6b0f7177229f00b2ec1ea2f48385fd.jpg'/> */}
<div class='card-wrapper'>
  <h1 class='call-to-action'>Sign In</h1>
  
  <form>
    <div className='field'>
      <label for='username'>Email</label><br />
      <i className='bx bx-user'></i>
      <input type='email' 
           id='username' 
           name='username' 
           required placeholder='Enter your Email'
           spellcheck='false'/>
    </div>
    
    <div className='field'>
     <label for='pwd' name='pwd'>Password</label><br />
      <i className='bx bx-lock-alt' ></i>
    <input type='password' 
           id='pwd' 
           name='pwd' 
           required placeholder='Enter your password'/>
    </div>
    <NavLink to="/signup">Forgot password?</NavLink>
    {/* <a href=''><span>Forgot password?</span></a> */}
    <input className="btn"  type='submit' id = 'login-button' value='Sign In'/>
    
  </form>
  
  
  <div className='sign-up'>
  Don't have an account yet? <br />
    {/* <a href=''>SIGN UP</a> */}
<NavLink className="sign_in_up" to="/signup">SIGN UP</NavLink>
  </div>
</div>
</div>

    
        </>
    )
}
export default Login;