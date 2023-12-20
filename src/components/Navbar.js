import React, { useState } from 'react'
/* import logo from "./assets/online-shopping.png"; */
import logo from "./assets/social.png";
import cart from "./assets/shopping-cart.png";
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [menu,setMenu] = useState("shop");

  return (
    <div className="navbar">
        <div className="logo">
            <img src={logo} alt=''/>
            <p>Amazon</p>
        </div>
        <ul className='menu'>
            <li onClick={()=>setMenu("shop")}><Link style={{textDecoration:'none'}} to="/"> Shop</Link> {menu==="shop" ?<hr/>:""}</li>
            <li onClick={()=>setMenu("mens")}><Link style={{textDecoration:'none'}} to="/mens"> Men</Link> {menu==="mens" ?<hr/>:""}</li>
            <li onClick={()=>setMenu("womens")}><Link style={{textDecoration:'none'}} to="/womens"> Women</Link> {menu==="womens" ?<hr/>:""}</li>
            <li onClick={()=>setMenu("kids")}><Link style={{textDecoration:'none'}} to="/kids"> Kids</Link> {menu==="kids" ?<hr/>:""}</li>
        </ul>
        <div className="cart">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart} alt=''/></Link>
            <div className="cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar