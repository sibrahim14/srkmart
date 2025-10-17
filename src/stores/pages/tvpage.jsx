import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { supabase } from '../components/singIn/superbase'


const TvPage = () => {
const [tv, setTV] = useState([])
 
 useEffect(()=>{
  const fetchTv = async()=>{
    const{data,error} = await supabase
     .from ('products')
     .select('*')
     .eq ('sub_category','tv')
     if (error){
      console.error ('error fetching data ', error)
     }else {
       setTV(data)
     }

  }
  fetchTv()
 },[])
  return (
    <>    
    <Navbar />
      <div className='pageSaction'>
        {tv.map((item) => (
          <div key={item.id}>
            <Link to={`/watch/${item.id}`}>
              <div className="pageImg">
                <img src={item.image} alt={item.model} />
              </div>
            </Link>
            <div className='proMode1'>
              <p>{item.company} {item.model}</p>
            </div>
          </div>
        ))}
      </div>
   </>
  )
}

export default TvPage