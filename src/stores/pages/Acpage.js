import React from 'react'
import {acData} from "../data/ac"

import Navbar from '../components/Navbar'

const Acpage = () => {
    
    return (
      <>
      <Navbar/>
      <h2>AC</h2>
      <div className="container-page">
          {
              acData.map((item)=>{
                  return(
                    <div>
                        <div className="page-block">
                          <img src={item.image} alt=''/>
                        </div>
                        <div className='model'>
                            {item.company} ,{item.model}
                        </div>
                    </div>
                  )
              })
          }
      </div>
      </>
    )
  }

export default Acpage;