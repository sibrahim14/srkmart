import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from './singIn/superbase'
const Woman = () => {

    const [women,setWomen] =useState([])
   
      useEffect(()=>{
        const fetchWomen =async() =>{
         const{ data, error} = await supabase
         .from ('products')
         .select('*')
         .eq ('sub_category', 'women')
         if (error){
           console.error ('error feacthing data',error)
         } else{
           setWomen(data)
         }
        }
        fetchWomen()
    },[])
   
 const fristFiveImages=women.slice(0,5)
  return (
    <>
    <h2>women ware</h2>

     <div className='proSection'>
     { fristFiveImages.map ((item)=>{
       return(
         <div className='imageBox'>
          <Link to={`/woman/${item.id}`}>
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

export default Woman