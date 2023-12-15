import React from 'react'
import {kitchenData} from "../data/kitchen";

const Kitchen = () => {
    const firstFiveImages=kitchenData.slice(0,5);

    return (
      <>
      <h2>Kitchen</h2>
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

export default Kitchen