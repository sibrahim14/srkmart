import React from "react";
import '../../App.css';
import { UserCart } from "../stores/context/cart";
import Navbar from "../stores/components/Navbar";

const Usercart = () => {
const { cartItems, removeFromCart,incrementQuantity, decrementQuantity } = UserCart();

  //  This function calculates the grand total by ensuring price is a number
  const calculateGrandTotal = () => {
    const total = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price) || 0; 
      const quantity = item.quantity || 1; 

      return sum + (price * quantity);
    }, 0);
    
    // Returns the total formatted as currency
    return total.toFixed(1); 
  };
  
  // The grand total value ready for display in JSX
  const grandTotal = calculateGrandTotal();

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <h2>Your Cart</h2>
       <div className="lenght">
        {cartItems.length === 0 &&
          <p>Your cart is empty...</p>
        }
        
         </div>
          <div className="cart-items">
             
             {cartItems.map((item) => (
             
             <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} width={100} />
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <div className="quantity-control">
              <button onClick={() => decrementQuantity(item.id)}>-</button>
            <span>  {item.quantity}  </span>
            <button onClick={() => incrementQuantity(item.id)}>+</button>
          </div>
             <div className="remove"> 
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
             </div> 
              </div>
            ))}
         
         {/* THE GRAND TOTAL JSX */}
         {cartItems.length > 0 && (
          <h3 className="grand-total">
            Total Price : ${grandTotal}
          </h3>
        )}
          
          </div>
        
      </div>
    </>
  );
};

export default Usercart;