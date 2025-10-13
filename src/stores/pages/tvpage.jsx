import React from 'react'
import { TvData } from '../data/Tv'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const TvPage = () => {
  return (
    <>    
    <Navbar/>
    <div className='pageSaction'> 
        {TvData.map((item)=>{
       return(
        <div>
            <Link to={`/tv/${item.id}`}>
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

export default TvPage