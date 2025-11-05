import React, { useEffect, useState } from 'react'
import { supabase } from './singIn/superbase';
import { Link } from 'react-router-dom';
 const Mobiles = () => {
  
  
    const [mobils,setMobils] =useState([])
   
      useEffect(()=>{
        const fetchMobils =async() =>{
         const{ data, error} = await supabase
         .from ('products')
         .select('*')
         .eq ('sub_category', 'mobile')
         if (error){
           console.error ('error feacthing data',error)
         } else{
           setMobils(data)
         }
        }
        fetchMobils()
    },[])
  
 const fristFiveImages =mobils.slice(0,5)
 
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
            <p>₹{item.price }</p>
         
          </div>
        )
       })
      }    
       </div>
    </>
  )
}
export default Mobiles