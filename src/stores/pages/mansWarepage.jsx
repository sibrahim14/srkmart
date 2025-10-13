import React from 'react'
import { menData } from '../data/men'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const MansWarepage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSaction'> 
        {menData.map((item)=>{
       return(
        <div>
            <Link to={`/manware/${item.id}`}>
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

export default MansWarepage