import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from "../assets/x.png";
import "./CartItems.css";

const CartItems = () => {
    const {getTotalCartAmount,All_Data,cartItem,removeFromCart}= useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {All_Data.map((e)=>{
            if(cartItem[e.id]>0)
            {
            return <div>
                        <div className="cartitems-format cartitems-main">
                            <img  className='cart_icon' src={e.image} alt=''/>
                            <p>{e.name}</p>
                            <p>Rs {e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                            <p>Rs {e.new_price*cartItem[e.id]}</p>
                            <img className='remove_icon' src={remove_icon} onClick={()=>{removeFromCart(e.id )}} alt=''/>
                        </div>
                        <hr />
                    </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Total</h1>
            
            <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>Rs {getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr/>
            <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>Rs {getTotalCartAmount()}</h3>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            </div>
        </div>
       
    </div>
  )
}

export default CartItems;