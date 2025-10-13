import React from 'react'
import { watchData } from '../data/watch'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Watchpage = () => {
  return (
    <>    
    <Navbar/>
    <div className='pageSaction'> 
        {watchData.map((item)=>{
       return(
        <div>
            <Link to={`/watch/${item.id}`}>
            <div className="pageImg">
                <img src={item.image} alt="" />
            </div>
               </Link>
            <div className='proMode1'>
              <p>{item.company} {item.model}</p>
            </div>
        </div>
       )
       })}
      </div> 
   </>
  )
}

export default Watchpage