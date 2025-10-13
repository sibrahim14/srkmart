import React from 'react'
import { acData } from '../stores/data/ac'
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'
import { UserCart } from '../stores/context/cart'


const Acsingle = () => {
   
    const {id}= useParams()
    const product =acData.find((item)=>item.id ===id)
    const{cartitems,addToCart} =UserCart();
    return (
        <> 
        <Navbar/>
       <div className="ind-page">
        <div className="ind-image">
             <img src={product.image} alt="" />
        </div>
         <div className="ind-detils">
         <div className="ind-compny">
         <h2>{product.company}</h2>
       </div>
         <div className="ind-"model>
            <h3>{product.model}</h3>
         </div>
          <div className="ind-price">
            <h2>{product.price}</h2>
            </div>
             <div className="ind-dese">
               <p>
                   {product.description}
               </p>
             </div>
             <button onClick={()=>addToCart(product)}>Add To Cart</button>
         </div>
     </div>
</>
  )
}

export default Acsingle