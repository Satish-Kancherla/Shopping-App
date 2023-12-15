import React from 'react'

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
            <li>Ac</li>
            <li>Books</li>
            <li>Computers</li>
            <li>Fridge</li>
            <li>Furniture</li>
            <li>Kitchen</li>
            <li>Men Fashion</li>
            <li>Mobiles</li>
            <li>Speakers</li>
            <li>Tv</li>
            <li>Watch</li>
            <li>Women Fashion</li>
        </ul>
    </div>
        
    </>
  )
}

export default Navbar