import React from 'react'
import {mobileData} from "../data/mobiles";
import { Link } from 'react-router-dom';
 const Mobiles = () => {
 
 const fristFiveImages =mobileData.slice(0,5)
 
  return (
    <>
    <h2>mobiles</h2>
    <div className='proSection'>
      { fristFiveImages.map ((item)=>{
        return(
        <div className='imageBox'>
           <Link to ={`/Mobiles/${item.id}`}>
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
export default Mobiles