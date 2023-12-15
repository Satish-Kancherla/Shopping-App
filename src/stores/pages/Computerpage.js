import React from 'react'
import{computerData} from "../data/computers";

import Navbar from '../components/Navbar';

const Computerspage = () => {

  return (
    <>
    <Navbar />
    <h2>Computers</h2>
    <div className="container-page">
        {
            computerData.map((item)=>{
                return(
                    <div>
                    <div className="page-block">
                        <img src={item.image} alt=''/>
                    </div>
                    <div className='model'>
                        {item.company}, {item.model}
                    </div>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Computerspage;