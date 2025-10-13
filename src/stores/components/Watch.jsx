import React from 'react'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom'


const Watch = () => {
  const fristFiveImages=watchData.slice(0,5)
  
  return (
    <>
    <h2>Kitchen</h2>

     <div className='proSection'>
     { fristFiveImages.map ((item)=>{
       return(
         <div className='imageBox'>
          <Link to={`/watch/${item.id}`}>
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

export default Watch