import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="container-nav">
        <div className="title">
            <h2>E-Mart</h2>
        </div>
        <div className='search'>
            <input type='text'size={30} placeholder='Search..'/>
        </div>
        <div className='user'>
            <div className='user-details'>
                SignIn/SignUp
            </div>
        </div>
            <div className="cart">
                Cart
            </div>
    </div>
    <div className="nav-bar">
        <ul>
            <Link to='/ac'><li>Ac</li></Link>
            <Link to='/book'><li>Books</li></Link>
            <Link to='/computer'><li>Computers</li></Link>
            <Link to='/fridge'><li>Fridge</li></Link>
            <Link to='/furniture'><li>Furniture</li></Link>
            <Link to='/kitchen'><li>Kitchen</li></Link>
            <Link to='/men'><li>Men Fashion</li></Link>
            <Link to='/mobile'><li>Mobiles</li></Link>
            <Link to='/speaker'><li>Speakers</li></Link>
            <Link to='/tv'><li>Tv</li></Link>
            <Link to='/watch'><li>Watch</li></Link>
            <Link to='/women'><li>Women Fashion</li></Link>
        </ul>
    </div>
        
    </>
  )
}

export default Navbar