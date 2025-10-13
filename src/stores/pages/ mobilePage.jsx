import React from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
 import { Link } from 'react-router-dom'
const  MobilePage = () => {
  

  return (
   <>
  <Navbar/>  
      <div className='pageSaction'> 
        {mobileData.map((item)=>{
       return(
        <div>
              <Link to={`/mobiles/${item.id}`}>  {/*img click opion onther page using link tag  */}
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
export default MobilePage