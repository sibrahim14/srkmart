import React from 'react'
import { TvData } from '../stores/data/Tv'
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'
import { UserCart } from '../stores/context/cart'

const Tvsingle = () => {
 const{id}=useParams()
    const product=TvData.find((item)=>item.id ===id)
    const{cartItems,addToCart } =UserCart();
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


export default Tvsingle