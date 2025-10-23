import React, { useEffect, useState } from 'react'
import { supabase } from '../components/singIn/superbase'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const FridgePage = () => {
  const [fridge, setFridge] = useState([])

  useEffect(() => {
    const fetchFridge = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('sub_category', 'fridge') // ✅ correct category

      if (error) {
        console.error('Error fetching data:', error)
      } else {
        setFridge(data)
      }
    }

    fetchFridge() // ✅ call the function
  }, []) // ✅ run only once

  return (
    <>
      <Navbar />
      <div className='pageSaction'>
        {fridge.map((item) => (
          <div key={item.id}>
            <Link to={`/fridge/${item.id}`}>
              <div className="pageImg">
                <img src={item.image} alt="" />
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

export default FridgePage
