import React from 'react'
import { furnitureData } from '../data/Furniture'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const FruniturePage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSaction'> 
        {furnitureData.map((item)=>{
       return(
        <div>
           <Link to={`/fruniture/${item.id}`}>
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

export default FruniturePage