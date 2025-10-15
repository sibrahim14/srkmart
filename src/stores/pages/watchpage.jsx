import React, { useEffect, useState } from 'react'
import { supabase } from '../components/singIn/superbase'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Watchpage = () => {
  const [watch, setWatch] = useState([])

  useEffect(() => {
    const fetchWatch = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('sub_category', 'watch') 

      if (error) {
        console.error('Error fetching data:', error)
      } else {
        setWatch(data)
      }
    }

    fetchWatch()
  }, [])

  return (
    <>
      <Navbar />
      <div className='pageSaction'>
        {watch.map((item) => (
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

export default Watchpage
