import React from 'react'
import {kitchenData} from "../data/kitchen";
import Navbar from '../components/Navbar';

const Kitchenpage = () => {
   

    return (
      <>
      <Navbar />
      <h2>Kitchen</h2>
      <div className="container-page">
          {
              kitchenData.map((item)=>{
                  return(
                    <div>
                      <div className="page-block">
                          <img src={item.image} alt=''/>
                      </div>
                      <div className='model'>
                      {item.brand}
                        </div>
                    </div>
              )})
          }
      </div>
      </>
    )
  }

export default Kitchenpage;