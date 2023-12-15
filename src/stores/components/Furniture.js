import React from 'react'
import {fruniture} from "../data/furniture"

const Furniture = () => {
    const firstFiveImages=furnitureData.slice(0,5);

    return (
      <>
      <h2>Frunitures</h2>
      <div className="container">
          {
              firstFiveImages.map((item)=>{
                  return(
                      <div className="img-block">
                          <img src={item.image} alt=''/>
                      </div>
                  )
              })
          }
      </div>
      </>
    )
  }

export default Furniture