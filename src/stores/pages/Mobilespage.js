import React from 'react'
import {mobileData} from "../data/mobiles";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Mobilespage = () => {

    

  return (
    <>
    <Navbar/>
    <h2>Mobiles</h2>
    <div className="container-page">
        {
           mobileData.map((item)=>{
                return(
                  <div>
                  <Link to={`/mobile/${item.id}`}>
                    <div className="page-block">
                        <img src={item.image} alt=''/>
                    </div>
                    </Link>
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

export default Mobilespage