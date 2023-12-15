import React from 'react'
import {furnitureData} from "../data/furniture"

import Navbar from '../components/Navbar'

const FurniturePage = () => {
    
    return (
      <>
      <Navbar />
      <h2>Frunitures</h2>
      <div className="container-page">
          {
            furnitureData.map((item)=>{
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

export default FurniturePage