import React from 'react'
import {watchData} from "../data/watch";

const watch = () => {
    const firstFiveImages=watchData.slice(0,5);
    
    return (
      <>
      <h2>Watches</h2>
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

export default watch;