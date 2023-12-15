import React from 'react'
import {womanData} from "../data/women";
const Woman = () => {
    const firstFiveImages=womanData.slice(0,5);

    return (
      <>
      <h2>Woman</h2>
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

export default Woman