import React from 'react'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
 const Computerpage = () => {
  return (
    <>    
    <Navbar/>
    <div className='pageSaction'> 
        {computerData.map((item)=>{
       return(
        <div>
          <Link to={`/computer/${item.id}`}>
            <div className="pageImg">
                <img src={item.image} alt=""/>
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
export default Computerpage 