import React, { useEffect, useState } from 'react'
import { supabase } from './singIn/superbase'
import { Link } from 'react-router-dom'

const Computers = () => {
  const[computer,setComputer]= useState([])

  useEffect(()=>{
    const fetchComputer =async() =>{
      const{data,error}=await supabase
      .from ('products')
      .select('*')
      .eq ('sub_category','computer')
      if (error){
        console.error ('error feacthing data', error)
      } else{
        setComputer(data)
      }
    }
    fetchComputer()
  },[])

 
 const fristFiveImages =computer.slice(0,5)
 
  return (
   
     <>
     <h2>Computers</h2>

      <div className='proSection'>
      { fristFiveImages.map ((item)=>{
        return(
          <div className='imageBox'>
           <Link to={`/computer/${item.id}`}>
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
export default Computers
