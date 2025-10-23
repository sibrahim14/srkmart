import React, { useEffect, useState } from 'react'
import { supabase } from '../components/singIn/superbase'

const AdminPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({
    product: '',
    image: '',
    company: '',
    model: '',
    price: '',
    category: '',
    sub_category: '',
    description: ''
  })
  const [editingId, setEditingId] = useState(null)
  const [filtersub_category, setFiltersub_category] = useState('')
  const [subCategories, setSubCategories] = useState([]) // dynamic sub-categories

  // Fetch all unique sub-categories from products
  const fetchSubCategories = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('sub_category')
      .neq('sub_category', null)
    
    if (error) console.error(error)
    else {
      const uniqueCategories = [...new Set(data.map(item => item.sub_category))]
      setSubCategories(uniqueCategories)
    }
  }

  // Fetch products with optional filter
  const fetchProducts = async () => {
    setLoading(true)
    let query = supabase.from('products').select('*')
    if (filtersub_category) query = query.eq('sub_category', filtersub_category)
    const { data, error } = await query
    if (error) console.error(error)
    else setProducts(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts()
    fetchSubCategories()
  }, [filtersub_category])

  // Add or update product
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editingId) {
      const { error } = await supabase
        .from('products')
        .update(form)
        .eq('id', editingId)
      if (error) console.error(error)
      else {
        fetchProducts()
        setEditingId(null)
        resetForm()
      }
    } else {
      const { error } = await supabase
        .from('products')
        .insert([form])
      if (error) console.error(error)
      else {
        fetchProducts()
        resetForm()
      }
    }
  }

  const resetForm = () => {
    setForm({
      product: '',
      image: '',
      company: '',
      model: '',
      price: '',
      category: '',
      sub_category: '',
      description: ''
    })
  }

  const handleEdit = (product) => {
    setForm({ ...product })
    setEditingId(product.id)
  }

  const handleDelete = async (id) => {
    const { error } = await supabase.from('products').delete().eq('id', id)
    if (error) console.error(error)
    else fetchProducts()
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Admin Dashboard</h1>

      {/* Filter */}
      <div style={{ marginBottom: '1rem' }}>
        <select
          value={filtersub_category}
          onChange={e => setFiltersub_category(e.target.value)}
        >
          <option value="">All Sub-categories</option>
          {subCategories.map(sub => (
            <option key={sub} value={sub}>{sub}</option>
          ))}
        </select>
        <button onClick={fetchProducts} style={{ marginLeft: '1rem' }}>Refresh</button>
      </div>

      {/* Add / Edit Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {['product','image','company','model','price','category','sub_category','description'].map(field => (
          <input
            key={field}
            placeholder={field.replace('_', ' ')}
            value={form[field]}
            onChange={e => setForm({...form, [field]: e.target.value})}
            style={{ flex: '1 1 200px', padding: '0.5rem' }}
            type={field==='price' ? 'number' : 'text'}
          />
        ))}
        <button type="submit">{editingId ? 'Update Product' : 'Add Product'}</button>
        {editingId && <button type="button" onClick={() => {resetForm(); setEditingId(null)}}>Cancel Edit</button>}
      </form>

      {/* Products Table */}
      {loading ? <p>Loading...</p> :
        <table border="1" cellPadding="10" style={{ width: '100%', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Company</th>
              <th>Model</th>
              <th>Price</th>
              <th>Category</th>
              <th>Sub-category</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.product}</td>
                <td>{p.company}</td>
                <td>{p.model}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>
                <td>{p.sub_category}</td>
                <td>{p.description}</td>
                <td>
                  <button onClick={() => handleEdit(p)}>Edit</button>
                  <button onClick={() => handleDelete(p.id)} style={{ marginLeft: '0.5rem' }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  )
}

export default AdminPage
