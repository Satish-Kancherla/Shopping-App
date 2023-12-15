import React from 'react'
import {speakerData} from "../data/speaker";
const Speakers = () => {
    const firstFiveImages=speakerData.slice(0,5);

    return (
      <>
      <h2>Speakers</h2>
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

export default Speakers