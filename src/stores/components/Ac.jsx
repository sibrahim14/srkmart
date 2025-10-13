import React from 'react'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'
 const Ac = () => {
 
 const fristFiveImages =acData.slice(0,5)
 
  return (
   
     <>
     <h2>Ac</h2>

      <div className='proSection'>
      { fristFiveImages.map ((item)=>{
        return(
             <div className='imageBox'>
           <Link to={`/ac/${item.id}`}>
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

 export default Ac