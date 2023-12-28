import React, { useContext, useState } from 'react'
/* import logo from "./assets/online-shopping.png"; */
import logo from "./assets/amazon-favicon.png";
import cart from "./assets/shopping-cart.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);

  return (
    <div className="navbar">
        <div className="logo">
            <img src={logo} alt=''/>
            <p>AMAZON</p>
        </div>
        <ul className='menu'>
            <li onClick={()=>setMenu("shop")}><Link style={{textDecoration:'none',color:"#1F275E"}} to="/"> Home</Link> {menu==="shop" ?<hr/>:""}</li>
            <li onClick={()=>setMenu("mens")}><Link style={{textDecoration:'none',color:"#1F275E"}} to="/mens"> Men</Link> {menu==="mens" ?<hr/>:""}</li>
            <li onClick={()=>setMenu("womens")}><Link style={{textDecoration:'none',color:"#1F275E"}} to="/womens"> Women</Link> {menu==="womens" ?<hr/>:""}</li>
            <li onClick={()=>setMenu("computers")}><Link style={{textDecoration:'none',color:"#1F275E"}} to="/computers"> Computers</Link> {menu==="computers" ?<hr/>:""}</li>
            <li onClick={()=>setMenu("mobiles")}><Link style={{textDecoration:'none',color:"#1F275E"}} to="/mobiles"> Mobiles</Link> {menu==="mobiles" ?<hr/>:""}</li>
            <li onClick={()=>setMenu("watches")}><Link style={{textDecoration:'none',color:"#1F275E"}} to="/watches"> Watches</Link> {menu==="watches" ?<hr/>:""}</li>
        </ul>
        <div className="cart">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart} alt=''/></Link>
            <div className="cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar;