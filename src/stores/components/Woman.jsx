import React from 'react'
import { womanData } from '../data/woman'
import { Link } from 'react-router-dom'
const Woman = () => {
 const fristFiveImages=womanData.slice(0,5)
  return (
    <>
    <h2>woman ware</h2>

     <div className='proSection'>
     { fristFiveImages.map ((item)=>{
       return(
         <div className='imageBox'>
          <Link to={`/woman/${item.id}`}>
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

export default Woman