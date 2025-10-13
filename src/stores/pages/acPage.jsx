import React from 'react'
import { acData } from '../data/ac'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const AcPage=()=>{
  return (
  <>
  <Navbar/>
    <div className='pageSaction'> 
        {acData.map((item)=>{
       return(
        <div>
           <Link to={`/ac/${item.id}`}>
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

export default AcPage