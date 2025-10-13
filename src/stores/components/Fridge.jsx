import React from 'react'
import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom'
 const Fridgeitems= () => {
 
 const fristFiveImages =fridgeData.slice(0,5)
 
  return (
   
     <>
     <h2>Fridge</h2>

      <div className='proSection'>
      { fristFiveImages.map ((item)=>{
        return(
          <div className='imageBox'>
           <Link to={`/fridge/${item.id}`}>
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
 export default Fridgeitems