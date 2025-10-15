import React, { useEffect, useState } from 'react'
import { supabase } from '../components/singIn/superbase'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Womanpage = () => {
  const [women, setWomen] = useState([])

  useEffect(() => {
    const fetchWomen = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('sub_category', 'women') 

      if (error) {
        console.error('Error fetching data:', error)
      } else {
        setWomen(data)
      }
    }

    fetchWomen()
  }, [])

  return (
    <>
      <Navbar />
      <div className='pageSaction'>
        {women.map((item) => (
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
export default Womanpage
