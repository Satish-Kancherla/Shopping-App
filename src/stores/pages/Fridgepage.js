import React from 'react'
import {fridgeData} from "../data/fridge";

import Navbar from '../components/Navbar';
const Fridgepage = () => {
   

    return (
      <>
      <Navbar />
      <h2>Fridges</h2>
      <div className="container-page">
          {
              fridgeData.map((item)=>{
                  return(
                    <div>
                      <div className="page-block">
                          <img src={item.image} alt=''/>
                      </div>
                      <div className='model'>
                        {item.brand}
                      </div>
                      </div>
                  )
              })
          }
      </div>
      </>
    )
  }

export default Fridgepage