import React from 'react'
import { NavLink } from "react-router-dom"
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
          <h1 class='call-to-action'>Login</h1>

          <form>
            <div className='field'>
              <label for='username'>Name</label><br />
              <i className='bx bx-user'></i>
              <input type='text'
                id='username'
                name='username'
                required placeholder='Enter your Name'
                spellcheck='false' />
            </div>
            {/* <div className='field'>
      <label for='username'>Email</label><br />
      <i className='bx bx-user'></i>
      <input type='email' 
           id='username' 
           name='username' 
           required placeholder='Enter your Email'
           spellcheck='false'/>
    </div> */}

            <div className='field'>
              <label for='pwd' name='pwd'>Password</label><br />
              <i className='bx bx-lock-alt' ></i>
              <input type='password'
                id='pwd'
                name='pwd'
                required placeholder='Enter your password' />
            </div>
            {/* <NavLink to="/Login">Forgot password?</NavLink> */}
            {/* <a href=''><span>Forgot password?</span></a> */}
            <input type='submit' id='login-button' value='Sign Up' />

          </form>

          {/* <div className='alternate-logins'>
    Or Sing Up Using
    <div className='social-links'>
      <i className='bx bxl-google' ></i>
      <i className='bx bxl-facebook' ></i>
      <i className='bx bxl-twitter' ></i>
    </div>
  </div> */}

          <div className='sign-up'>
            Dont have an account ? <br />
            {/* <a href=''>SIGN UP</a> */}
            <NavLink className="sign_in_up" to="/signup">Sign Up</NavLink>
          </div>
        </div>
      </div>

    </>
  )
}
export default Login;