import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from './singIn/superbase'
 const MenData = () => {

    const [men,setMen] =useState([])
   
      useEffect(()=>{
        const fetchMen =async() =>{
         const{ data, error} = await supabase
         .from ('products')
         .select('*')
         .eq ('sub_category', 'menwher')
         if (error){
           console.error ('error feacthing data',error)
         } else{
           setMen(data)
         }
        }
        fetchMen()
    },[])
   
 const fristFiveImages = men.slice(0,5)
 
  return (
   
     <>
     <h2>Men wear</h2>

      <div className='proSection'>
      { fristFiveImages.map ((item)=>{
        return(
          <div className='imageBox'>
           <Link to ={`/manware/${item.id}`}>
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
 export default MenData