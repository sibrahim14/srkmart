import React, { useEffect, useState } from 'react'
import { supabase } from './singIn/superbase';
import { Link } from 'react-router-dom';
 const Tv = () => {
 
    const [tv,setTv] =useState([])
   
      useEffect(()=>{
        const fetchTv =async() =>{
         const{ data, error} = await supabase
         .from ('products')
         .select('*')
         .eq ('sub_category', 'tv')
         if (error){
           console.error ('error feacthing data',error)
         } else{
           setTv(data)
         }
        }
        fetchTv()
    },[])
    
     const fristFiveImages =tv.slice(0,5)
    
   
 
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
            <p>₹{item.price }</p>
          </div>
        )
       })
      }    
       </div>
    </>
  )
}

 export default Tv