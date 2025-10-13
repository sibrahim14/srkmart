import React from 'react'
import { computerData } from '../data/computers'
import { Link } from 'react-router-dom'
 const Computers = () => {
 
 const fristFiveImages =computerData.slice(0,5)
 
  return (
   
     <>
     <h2>Computers</h2>

      <div className='proSection'>
      { fristFiveImages.map ((item)=>{
        return(
          <div className='imageBox'>
           <Link to={`/computer/${item.id}`}>
            <img className= 'proImage'src={item.image} alt="" />
           </Link>
            <p>{item.price }</p>
          </div>
        )
       })
      }    
     </div>
     </>
  )
 }
export default Computers
