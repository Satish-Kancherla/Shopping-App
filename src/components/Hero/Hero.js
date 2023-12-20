import wave from "../assets/wave.png";
import React from 'react'
import wo from "../assets/wom.jpg"
import arrow from"../assets/right-arrow.png"
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-icon">
                    <p>new</p>
                    <img src={wave} alt=''/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest">
                <div>Latest Collection</div>
                <img src={arrow} alt=''/>
            </div>
        </div>
        <div className="hero-right">
            <img src={wo} alt=''/>
        </div>
    </div>
  )
}

export default Hero