import React, { useEffect, useState } from 'react'
import { supabase } from '../components/singIn/superbase'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const AcPage=()=>{
  const[ac,setAc] =useState([])
 
  useEffect(()=>{
    const fetchAc = async () =>{
      const{data,error}=await supabase
      .from('products')
      .select('*')
      .eq('sub_category','ac')
      if (error){
        console.error('Error featching data:',error)
      }else{
        setAc(data)
      }
    }
    fetchAc()
  },[])
  
  return (
  <>
  <Navbar/>
    <div className='pageSaction'> 
        {ac.map((item)=>{
       return(
        <div>
           <Link to={`/ac/${item.id}`}>
            <div className="pageImg">
                <img src={item.image} alt="" />
            </div>
             </Link>
            <div className='proMode1'> 
              <p>{item.company} {item.model}</p>
            </div>
        </div>
       )
       })}
      </div> 
  </>
    
  )
}

export default AcPage