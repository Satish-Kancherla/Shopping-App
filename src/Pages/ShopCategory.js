import React from 'react'
import "./ShopCategory.css";
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Item from '../components/Item/Item';
import All_Data from '../components/assets/aac';
import down_icon from"../components/assets/down-arrow.png";
import Offers from '../components/Offers/Offers';

const ShopCategory = (props) => {
  const { All_Data } = useContext(ShopContext);
  return (
    <div className='shopcategory'>
      <Offers />
  
      <div className='shopcategory-indexsort'>
        <p>
          <span>Showing 1-12</span> out of 52 products
        </p>
      
      <div className='shopcategory-sort'>
        Sort by <img src={down_icon} alt=''/>
      </div>
      </div>
      <div className='shopcategory-products'>
        {All_Data.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
          } else {
            return null;
          }
        })}
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory;