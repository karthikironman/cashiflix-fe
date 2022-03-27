import React from 'react'
import './signup.css';
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import onboardingService from "../../services/onboarding.service"
const API = new onboardingService();
const handleSubmit =  (intitialize) => async(event) => {
  event.preventDefault();
  let phone = event.target[0].value;
  let otp = event.target[1].value;
  let name = event.target[2].value;
  let password = event.target[3].value;
  try{
    await API.signup(name,phone,otp,password);
    toast('USER CREATED SUCCESSFULLY');
    setTimeout(()=>{intitialize(); alert('navigate to login page') },1000)
  }catch(err){
    console.log('error from handle submit ',err)
    toast('NUMBER ALREADY EXISTS or may be some server error, please retry after some time');
    setTimeout(()=>{intitialize();},1000)
  }
  console.log('form submitted pa pb ', phone, otp, name, password)
}
const verifyOtp = async (phone, otp, setOtpVerified) => {
  let result = await API.verifyOtp(phone, otp);
  let { otpVerified = false } = result.data.data;
  if (otpVerified) {
    setOtpVerified(true);
    toast('OTP SUCCESSFULLY VERIFIED')
  } else {
    toast('Wrong OTP, RETRY');
    setOtpVerified(false);
  }
}
const Signup = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [showOtp, setshowOtp] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [name, setName] = useState("");
  const intitialize = () => {
    setPhone("");
    setOtp("");
    setPassword("");
    setshowOtp(false);
    setOtpVerified(false);
    setName("");
  }
  //useeffects______________________
  useEffect(() => { intitialize() }, [])
  useEffect(() => {
    triggerOtp();
  }, [phone])
  //end of useeffects______________________
  const triggerOtp = async () => {
    if (phone.length > 10) {
      setPhone(phone.substring(0, 10))
    }
    if (phone.length > 9) {
      toast('OTP Sent to the Phone +91-' + phone);
      await API.triggerOtp(phone);
      setshowOtp(true)
    } else {
      setshowOtp(false)
    }
  }
  return (
    <>
      <div className="login_main_div">
        <div class='card-wrapper'>
          <h1 class='call-to-action'>Sign Up</h1>
          <form onSubmit={handleSubmit(intitialize)}>
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
                  disabled={otpVerified}
                  onChange={(e) => setOtp(e.target.value)}
                  spellcheck='false' />
              </div>
              {otpVerified === false && <button onClick={(e) => { e.preventDefault(); verifyOtp(phone, otp, setOtpVerified) }} style={{ height: 'fit-content', alignSelf: 'end', padding: '0.3rem' }}>VERIFY OTP</button>}
              {otpVerified === false && <button onClick={(e) => { e.preventDefault(); triggerOtp() }} style={{ height: 'fit-content', alignSelf: 'end', padding: '0.3rem' }}>RESEND OTP</button>}

            </div>}
            {otpVerified &&
              <>
                <div className='field'>
                  <label for='pwd' name='pwd'>Name</label><br />
                  <i className='bx bx-lock-alt' ></i>
                  <input
                    id='name'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required placeholder='Enter your Name' />
                </div>
                <div className='field'>
                  <label for='pwd' name='pwd'>Password</label><br />
                  <i className='bx bx-lock-alt' ></i>
                  <input type='password'
                    id='pwd'
                    name='pwd'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required placeholder='Enter your password' />
                </div></>

            }

            <input className="btn" type='submit' id='login-button' disabled={!otpVerified} value='Sign Up' />

          </form>


          <div className='sign-up'>
            Already have an Account ee?
            <br />
            <NavLink className="sign_in_up" to="/login">Login</NavLink>
          </div>
        </div>
      </div>


    </>
  )
}
export default Signup;
