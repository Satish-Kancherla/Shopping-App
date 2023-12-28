import React from 'react'
import "./Footer.css"
import amazon from "../assets/amazon-favicon.png";
import fb from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import whatsapp from "../assets/whatsapp.png";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={amazon} alt=''/>
            <p>AMAZON</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons">
                <img src={whatsapp} alt=''/>
            </div>
            <div className="footer-icons">
                <img src={youtube} alt=''/>
            </div>
            <div className="footer-icons">
                <img src={fb} alt=''/>
            </div>
            
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2023 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer