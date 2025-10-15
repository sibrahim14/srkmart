import React, { useEffect, useState } from 'react'
import { supabase } from '../components/singIn/superbase'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const MobilePage = () => {
  const [mobiles, setMobiles] = useState([])

  useEffect(() => {
    const fetchMobiles = async () => {
      const { data, error } = await supabase
        .from('products')            //  your Supabase table name
        .select('*')
        .eq('sub_category', 'mobile') // fetch only rows where sub_category = 'mobile'

      if (error) {
        console.error('Error fetching data:', error)
      } else {
        setMobiles(data)
      }
    }

    fetchMobiles()
  }, [])

  return (
    <>
      <Navbar />
      <div className='pageSaction'>
        {mobiles.map((item) => (
          <div key={item.id}>
            <Link to={`/mobiles/${item.id}`}>
              <div className="pageImg">
                <img src={item.image} alt={item.model} />
              </div>
            </Link>
            <div className='proMode1'>
              <p>{item.company} {item.model}</p>
              <p>₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default MobilePage
