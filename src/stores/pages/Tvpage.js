import React from 'react'
import {tvData} from "../data/tv";
import Navbar from '../components/Navbar';
const Tvpage = () => {
   

    return (
      <>
      <Navbar/>
      <h2>TV</h2>
      <div className="container-page">
          {
              tvData.map((item)=>{
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

export default Tvpage