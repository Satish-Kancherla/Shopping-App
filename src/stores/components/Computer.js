import React from 'react'
import{computerData} from "../data/computers";

const Computers = () => {

    const firstFiveImages=computerData.slice(0,5);

  return (
    <>
    <h2>Computers</h2>
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

export default Computers