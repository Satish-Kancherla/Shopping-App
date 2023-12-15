import React from 'react'
import {watchData} from "../data/watch";
import Navbar from '../components/Navbar';

const Watchpage = () => {

    
    return (
      <>
      <Navbar/>
      <h2>Watches</h2>
      <div className="container-page">
          {
              watchData.map((item)=>{
                  return(
                    <div>
                      <div className="page-block">
                          <img src={item.image} alt=''/>
                      </div>
                      <div className='model'>
                      {item.brand}, {item.model}
                      </div>
                  </div>
        
              )})
          }
      </div>
      </>
    )
  }

export default Watchpage;