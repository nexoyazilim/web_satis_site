import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function BlogPreview() {
  const { siteId } = useParams()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // API Configuration (dev: proxy /api, prod: VITE_API_URL)
  const API_BASE_URL = import.meta.env.DEV ? '/api' : (import.meta.env.VITE_API_URL || 'https://nexoyazilim-api.us-east-1.elasticbeanstalk.com')
  const API_BASE_URL_FOR_IMAGES = import.meta.env.DEV ? '/api' : (import.meta.env.VITE_API_URL || 'https://nexoyazilim-api.us-east-1.elasticbeanstalk.com')
  const SITE_ID = siteId || localStorage.getItem('active_site_id') || '5'
  const CUSTOMER_ID = (JSON.parse(localStorage.getItem('user') || '{}').id) || import.meta.env.VITE_CUSTOMER_ID || '4'
  const API_KEY = import.meta.env.VITE_API_KEY || 'prod-key'

  const fallbackPosts = [
    {
      id: 'fallback-1',
      title: 'Evcil Hayvanınızın Beslenme İhtiyaçlarını Anlama',
      description: 'Evcil hayvanınızın yaşı ve ırkı için doğru yiyeceği nasıl seçeceğinizi öğrenin.',
      content: '...',
      category: 'nutrition',
      slug: 'evcil-hayvan-beslenme-ihtiyaclari',
      featured_image: '',
      is_published: true,
      created_at: new Date().toISOString()
    }
  ]

  const fetchPosts = async () => {
    try {
      setLoading(true)
      setError(null)

      const url = selectedCategory === 'all'
        ? `${API_BASE_URL}/blog/posts?customer_id=${CUSTOMER_ID}`
        : `${API_BASE_URL}/blog/posts?category=${selectedCategory}&customer_id=${CUSTOMER_ID}`

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000)

      const response = await fetch(url, {
        headers: {
          'x-site-id': SITE_ID,
          'x-api-key': API_KEY,
          'Content-Type': 'application/json'
        },
        signal: controller.signal
      })
      clearTimeout(timeoutId)

      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const data = await response.json()
      if (data.success && (data.data || data.sites || data.posts)) {
        setPosts(data.data || data.posts || [])
      } else {
        throw new Error('Invalid API response')
      }
    } catch (err) {
      setError(`API bağlanamadı, statik veriler gösteriliyor: ${err.message}`)
      setPosts(selectedCategory === 'all' ? fallbackPosts : fallbackPosts.filter(p => p.category === selectedCategory))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchPosts() }, [selectedCategory])

  const filteredPosts = posts.filter(post =>
    (post.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (post.description || '').toLowerCase().includes(searchTerm.toLowerCase())
  )

  const categories = [
    { value: 'all', label: 'Tümü' },
    { value: 'health', label: 'Sağlık' },
    { value: 'nutrition', label: 'Beslenme' },
    { value: 'training', label: 'Eğitim' }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <input
          type="search"
          placeholder="Makalelerde ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full md:max-w-md px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map(c => (
            <button key={c.value} onClick={() => setSelectedCategory(c.value)}
              className={`px-4 py-2 text-sm rounded-full border ${selectedCategory === c.value ? 'bg-black text-white' : 'bg-white text-black'}`}>
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-blue-100 border border-blue-300 rounded-md text-sm">{error}</div>
      )}

      {loading ? (
        <div className="py-16 text-center">Yükleniyor...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
              <div className="w-full h-44 bg-gray-100" />
              <div className="p-5 flex flex-col gap-2 flex-1">
                <div className="text-xs text-gray-500">{new Date(post.created_at).toLocaleDateString('tr-TR')}</div>
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-sm text-gray-600 flex-1">{post.description}</p>
                <Link to={`/blog/${post.slug}`} className="font-medium text-black">Devamını Oku →</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


