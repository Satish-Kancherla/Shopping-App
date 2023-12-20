import React from 'react';
import "./NewCollections.css";
import data1 from "../assets/aab.js";
import Item from '../Item/Item.js';

const NewCollections = () => {
  return (
    <div className='newcollections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
        {data1.map((item)=>{
                return <Item key={item} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
            })}
        </div>

    </div>
  )
}

export default NewCollections