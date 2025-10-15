import React, { useState, useEffect } from 'react'
import { supabase } from '../components/singIn/superbase'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const MansWarepage = () => {
  const [men, setMen] = useState([])

  useEffect(() => {
    const fetchMen = async () => {
      const { data, error } = await supabase
        .from('products')             
        .select('*')
        .eq('sub_category', 'menwher')   

      if (error) {
        console.error('Error fetching data:', error)
      } else {
        setMen(data)
      }
    }

    fetchMen()
  }, [])

  return (
    <>
      <Navbar />
      <div className='pageSaction'>
        {men.map((item) => (
          <div key={item.id}>
            <Link to={`/manware/${item.id}`}>
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

export default MansWarepage
