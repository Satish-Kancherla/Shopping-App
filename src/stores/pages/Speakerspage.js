import React from 'react'
import {speakerData} from "../data/speaker";
import Navbar from '../components/Navbar';

const Speakerspage = () => {
    

    return (
      <>
      <Navbar/>
      <h2>Speakers</h2>
      <div className="container-page">
          {
              speakerData.map((item)=>{
                  return(
                    <div>
                      <div className="page-block">
                          <img src={item.image} alt=''/>
                      </div>
                      <div className='model'>
                      {item.brand}, {item.model}
                  </div>
                  </div>
                  )
              })
          }
      </div>
      </>
    )
  }

export default Speakerspage