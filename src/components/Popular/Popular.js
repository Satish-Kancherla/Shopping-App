import React from 'react'
import "./Popular.css";
import data from "../assets/aaa.js";
import Item from '../Item/Item';


const Popular = () => {
  return (
    <div className='popular'>
        <h1>CATEGORIES</h1>
        <hr/>
        <div className="popular-item">
            {data.map((item)=>{
                return <Item key={item} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
            })}
        </div>
    </div>
  )
}

export default Popular