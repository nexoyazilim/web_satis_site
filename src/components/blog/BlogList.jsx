import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'

const BlogList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    import('../../data/blogPosts.json')
      .then((mod) => setPosts(mod.default || []))
      .catch(() => setPosts([]))
  }, [])

  if (!posts.length) {
    return null
  }

  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Blog Yazıları</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <BlogCard key={p.id} title={p.title} image={p.image} excerpt={p.excerpt} date={p.date} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList


