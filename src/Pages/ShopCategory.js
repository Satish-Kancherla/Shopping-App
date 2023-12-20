import React from 'react'
import "./ShopCategory.css";
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const ShopCategory = () => {
  const {Data} =useContext(ShopContext);
  return (
    <div className='shopcategory'>

    </div>
  )
}

export default ShopCategory