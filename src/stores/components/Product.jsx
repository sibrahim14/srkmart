import React from "react";
import Mobiles from "./Mobiles";
import Computers from "./Cmoputers";
import Ac from "./Ac";
import Fridge from "./Fridge";

import ManWear from "./ManWear"
import Tv from "./Tv";
import Watch from "./Watch";
import Woman from "./Woman";



function Product() {
  return (
    <div> 
       <div>
       <img src="../../../public/assets/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" alt="" className="baner"/>
       </div>
       <img src="../../../public/assets/63fd3a946fd2d3cc.webp" alt="" className="baner" />
        <Mobiles />
      <div>
        <img src="../../../public/assets/9a13dc79ca4368d6c87acb2e52cadf9d.jpg"alt="" className="baner1"/>
      </div>
      <Computers /> 
     
       <Ac/> 
      <Fridge/>      
     <ManWear/>
      <Tv/>
      <Watch/>
      <Woman/>
     
    </div>
  );
}

export default Product;