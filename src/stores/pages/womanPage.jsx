import React from 'react'
import { womanData } from '../data/woman'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const WomanPage = () => {
  return (
    <>    
    <Navbar/>
    <div className='pageSaction'> 
        {womanData.map((item)=>{
       return(
        <div>
            <Link to={`/woman/${item.id}`}>
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

export default WomanPage