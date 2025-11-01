import React, { useEffect, useState } from 'react'
import { fetchNews } from '../../utils/fetchNews'
import BlogCard from './BlogCard'

const NewsList = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let mounted = true
    fetchNews()
      .then((items) => {
        if (mounted) {
          setNews(items || [])
        }
      })
      .catch(() => {
        if (mounted) setError('Haberler yüklenemedi')
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })
    return () => {
      mounted = false
    }
  }, [])

  if (loading) {
    return (
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Güncel Haberler</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-2xl border border-gray-200 h-64 bg-gray-50" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error || !news.length) {
    return null
  }

  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Güncel Haberler</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((n) => (
            <BlogCard key={n.id} title={n.title} image={n.image} excerpt={n.excerpt} date={n.date} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsList


