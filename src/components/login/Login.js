import React from 'react'
import './login.css';
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
const handleSubmit = (event) => {
  event.preventDefault();
  console.log('form submitted pa pb ', event.target[1].value)
}
const verifyOtp = (phone,otp) => {
  toast(`verifying the phone and otp ${phone} and ${otp}`)
}
const Login = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [password, setPassword] = useState('');
  const [showOtp, setshowOtp] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  useEffect(() => {
    if (phone.length > 10) {
      setPhone(phone.substring(0, 10))
    }
    if (phone.length > 9 && otpSent === false) {
      toast('OTP Sent to the Phone +91-' + phone);
      setshowOtp(true)
      setOtpSent(true)
    } else {
      setshowOtp(false)
      setOtpSent(false)
    }
  }, [phone])

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
          <h1 class='call-to-action'>Sign Up</h1>

          <form onSubmit={handleSubmit}>
            <div className='field'>
              <label for='phone'>Phone</label><br />
              <i className='bx bx-user'></i>
              <input type='number'
                id='phone'
                name='phone'
                required placeholder='Enter your Phone Number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                spellcheck='false' />
            </div>
            {showOtp && <div className='field' style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <label for='otp'>OTP</label><br />
                <i className='bx bx-user'></i>
                <input type='number'
                  id='otp'
                  name='otp'
                  required placeholder='Enter the OTP'
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  spellcheck='false' />
              </div>
              <button onClick={()=>{verifyOtp(phone,otp)}} style={{ height: 'fit-content', alignSelf: 'end', padding: '0.3rem' }}>VERIFY OTP</button>
            </div>}
            {otpVerified &&
              <div className='field'>
                <label for='pwd' name='pwd'>Password</label><br />
                <i className='bx bx-lock-alt' ></i>
                <input type='password'
                  id='pwd'
                  name='pwd'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required placeholder='Enter your password' />
              </div>
            }

            {/* <NavLink to="/signup">Forgot password?</NavLink> */}
            {/* <a href=''><span>Forgot password?</span></a> */}
            <input className="btn" type='submit' id='login-button' value='Sign Up' />

          </form>


          <div className='sign-up'>
            Don't have an account yet? <br />
            {/* <a href=''>SIGN UP</a> */}
            <NavLink className="sign_in_up" to="/signup">SIGN In</NavLink>
          </div>
        </div>
      </div>


    </>
  )
}
export default Login;