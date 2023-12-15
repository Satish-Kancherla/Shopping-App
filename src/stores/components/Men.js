import React from 'react'
import {menData} from "../data/men";

function Men() {
    const firstFiveImages=menData.slice(0,5);

    return (
      <>
      <h2>Men</h2>
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

export default Men