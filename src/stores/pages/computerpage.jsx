import React, { useEffect, useState } from 'react'
import { supabase } from '../components/singIn/superbase'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Computerpage = () => {
  const [computer, setComputer] = useState([])

  useEffect(() => {
    const fetchComputer = async () => {
      const { data, error } = await supabase
        .from('products') // ✅ your Supabase table name
        .select('*')
        .eq('sub_category', 'computer') // ✅ filter condition

      if (error) {
        console.error('Error fetching data:', error)
      } else {
        setComputer(data)
      }

    }

    fetchComputer()
  }, [])
  return (
    <>
      <Navbar />
      <div className='pageSaction'>
        {computer.map((item) => (
          <div key={item.id}>
            <Link to={`/computer/${item.id}`}>
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

export default Computerpage
