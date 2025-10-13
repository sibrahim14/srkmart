import React from 'react'
import { menData } from '../data/men'
import { Link } from 'react-router-dom'
 const MenData = () => {
 
 const fristFiveImages = menData.slice(0,5)
 
  return (
   
     <>
     <h2>Men</h2>

      <div className='proSection'>
      { fristFiveImages.map ((item)=>{
        return(
          <div className='imageBox'>
           <Link to ={`/manware/${item.id}`}>
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
 export default MenData