import React from 'react'
import {TvData} from "../data/Tv";
import { Link } from 'react-router-dom';
 const Tv = () => {
 
 const fristFiveImages =TvData.slice(0,5)
 
  return (
    <>
    <h2>Tv</h2>
    <div className='proSection'>
      { fristFiveImages.map ((item)=>{
        return(
          <div className='imageBox'>
           <Link to ={`/tv/${item.id}`}> 
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

 export default Tv