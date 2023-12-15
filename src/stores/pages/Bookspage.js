import React from 'react'
import {booksData} from "../data/books"
import Navbar from '../components/Navbar'

const Bookspage = () => {
    

    return (
        
      <>
      <Navbar />
      <h2>Books</h2>
      <div className="container-page">
          {
              booksData.map((item)=>{
                  return(
                    <div>
                        <div className="page-block">
                            <img src={item.image} alt='' />
                        </div>
                        <div className='model'>
                        {item.title}
                        </div>
                    </div>  
                     )
            })}
      </div>
      </>
    )
  }

export default Bookspage