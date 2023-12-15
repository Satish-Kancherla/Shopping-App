import React from 'react'
import {acData} from "../data/ac"

const Ac = () => {
    const firstFiveImages=acData.slice(0,5);

    return (
      <>
      <h2>AC</h2>
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

export default Ac