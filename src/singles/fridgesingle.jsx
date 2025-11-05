import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'
import { UserCart } from '../stores/context/cart'
import { supabase } from '../stores/components/singIn/superbase'
const Fridgesingle = () => {
 
  
    const [fridge,setFridge] =useState([])
     const {id}= useParams()
     const{addToCart} =UserCart();  
     
       useEffect(()=>{
          const fetchFridge =async() =>{
           const{ data, error} = await supabase
           .from ('products')
           .select('*')
           .eq ('sub_category', 'fridge')
           if (error){
             console.error ('error feacthing data',error)
           } else{
             setFridge(data)
           }
          }
          fetchFridge()
      },[])
    
      
      const product =fridge.find((item)=>item.id === Number(id))
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
         <div className="ind-"model>
            <h3>{product?.model}</h3>
         </div>
          <div className="ind-price">
            <h2>₹{product?.price}</h2>
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

export default Fridgesingle