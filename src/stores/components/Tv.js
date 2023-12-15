import React from 'react'
import {tvData} from "../data/tv";
const Tv = () => {
    const firstFiveImages=tvData.slice(0,5);

    return (
      <>
      <h2>TV</h2>
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

export default Tv