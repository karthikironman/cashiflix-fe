import React from 'react'
import { NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
import onboardingService from '../../services/onboarding.service';
const API = new onboardingService();
const handleSubmit = async (event) => {
  event.preventDefault();
  let phone = event.target[0].value;
  let password = event.target[1].value;
  try{
    let loginData = await API.login(phone,password);
    if(loginData.data.data.registered === false){
      //phone not exist
      toast('Phone number doesn"t exists, please signup first');
    }else if(loginData.data.data.password === false){
      toast('Wrong password, retry');
      //wrong password
    }else{
      toast('LOGIN SUCCESS FULL');
      let username = loginData.data.data.data[0].name;
      toast('Welcome '+username);
      //successfull
    }
    
  }catch(err){
    console.log('error',err)
  }
}
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

          <form onSubmit={handleSubmit}>
            <div className='field'>
              <label for='phone'> PHONE</label><br />
              <i className='bx bx-user'></i>
              <input type='number'
                id='phone'
                name='phone'
                required placeholder='Enter your Phone Number'
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
            <input type='submit' id='login-button' value='Login' />

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