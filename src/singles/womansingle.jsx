import React, { useEffect, useState } from 'react'
import Navbar from '../stores/components/Navbar'
import { useParams } from 'react-router-dom'
import { UserCart } from '../stores/context/cart'
import { supabase } from '../stores/components/singIn/superbase'

const Womansingle = () => {
 
  
    const [women,setWomen] =useState([])
     const {id}= useParams()
     const{addToCart} =UserCart();  
     
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
    
      
      const product =women.find((item)=>item.id === Number(id))
    return (
    <>
    <Navbar/>
    <div className="ind-page">
     <div className="ind-image">
          <img src={product?.image} alt="" />
     </div>
      <div className="ind-detils">
      <div className="ind-compny">
      <h2>{product?.company}</h2>
    </div>
      <div className="ind-model">
         <h3>{product?.model}</h3>
      </div>
       <div className="ind-price">
         <h2>{product?.price}</h2>
         </div>
          <div className="ind-dese">
            <p>
                {product?.description}
            </p>
          </div>
          <button onClick={()=>addToCart(product)}>Add To Cart</button>
      </div>
  </div>
    </>  
    )
}

export default Womansingle