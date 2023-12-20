import React from 'react'
import Data from "../components/assets/aac.js";
import { createContext } from 'react';

export const ShopContext =createContext(null);

const ShopContextProvider =(props) =>{
    const contextValue ={Data};
    return(
        <ShopContextProvider value={contextValue}>{props.children}</ShopContextProvider>
    )
}

export default ShopContextProvider;