import React from 'react'
import {womanData} from "../data/women";
import Navbar from '../components/Navbar';
const Womanpage = () => {
    

    return (
      <>
      <Navbar/>
      <h2>Woman</h2>
      <div className="container-page">
          {
              womanData.map((item)=>{
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

export default Womanpage