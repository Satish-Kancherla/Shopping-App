import React from 'react'
import "./LoginSignup.css"
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type="text" placeholder='Enter Your Name' />
          <input type='email' placeholder='Enter Email Address' />
          <input type='password' placeholder='Enter Password' />
        </div>
        <div className='loginsignup-agree'>
          <input type='checkbox' name=' ' id='' />
          <p>By clicking, I agree to the terms of use & privacy policy</p>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>
          Already have an account? <span>Login here</span>
        </p>

      </div>
    </div>

  )
}

export default LoginSignup