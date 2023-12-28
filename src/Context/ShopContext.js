import React, { useState } from 'react'
import { createContext } from 'react';
import All_Data from '../components/assets/aac';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < All_Data.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) =>{

    const [cartItem,setCartItem] = useState(getDefaultCart());

    const addToCart=(itemId)=>{
        setCartItem((prev)=>({...cartItem,[itemId]:prev[itemId]+1}));
    }
    
    const removeFromCart=(itemId)=>{
        setCartItem((prev)=>({...cartItem,[itemId]:prev[itemId]-1}));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem)
        {
            if(cartItem[item] > 0)
            {
                let itemInfo = All_Data.find((product)=>product.id===Number(item));
                totalAmount += cartItem[item] * itemInfo.new_price;
            }
              
        }
        
        return totalAmount;  
    }
    const getTotalCartItems =() =>{
        let totalItem =0;
        for (const item in cartItem)
        {
            if(cartItem[item]>0)
            {
                totalItem+=cartItem[item];
            }
        }
        return totalItem;
    }

    const contextValue = {getTotalCartAmount,getTotalCartItems,All_Data,cartItem,addToCart,removeFromCart};
    console.log(cartItem);
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;