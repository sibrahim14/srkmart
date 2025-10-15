import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from './singIn/superbase'


const Watch = () => {
    const [watch,setWatch] =useState([])
   
      useEffect(()=>{
        const fetchWatch =async() =>{
         const{ data, error} = await supabase
         .from ('products')
         .select('*')
         .eq ('sub_category', 'watch')
         if (error){
           console.error ('error feacthing data',error)
         } else{
           setWatch(data)
         }
        }
        fetchWatch()
    },[])
    
     const fristFiveImages =watch.slice(0,5)
    
     
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