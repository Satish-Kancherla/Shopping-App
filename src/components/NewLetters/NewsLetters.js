import React from 'react';
import "./NewsLetters.css";

const NewsLetters = () => {
  return (
    <div className="newsletters">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className='newsletter-email'>
            <input type='email' placeholder='Enter your Email Id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetters