import React from 'react'
import { furnitureData } from '../data/Furniture'
import { Link } from 'react-router-dom'
export const computers = () => {
 
 const fristFiveImages =furnitureData.slice(0,5)
 
  return (
   
     <>
     <h2>furniture</h2>

      <div className='proSection'>
      { fristFiveImages.map ((item)=>{
        return(
          <div className='imageBox'>
            <Link to={`/fruniture/${item.id}`}>
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
 export default computers
