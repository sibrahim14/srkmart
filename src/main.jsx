import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './stores/context/cart'; // ✅ import provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>  
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
