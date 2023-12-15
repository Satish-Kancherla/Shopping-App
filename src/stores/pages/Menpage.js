import React from 'react'
import {menData} from "../data/men";
import Navbar from '../components/Navbar';

function Menpage() {


    return (
      <>
      <Navbar/>
      <h2>Men</h2>
      <div className="container-page">
          {
              menData.map((item)=>{
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

export default Menpage;