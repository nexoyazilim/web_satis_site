import React from 'react'

const BlogHero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={`${import.meta.env.BASE_URL}headers/blog.jpg`}
          alt="Blog Arkaplan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center w-full -mt-32">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-black/5 text-gray-800 text-sm font-medium mb-5">
            Güncel İçerikler
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Blog
            <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Haberler ve Yazılar</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-700">
            Sektörden son gelişmeler ve uzman içerikler. Canlı haberler uygun olduğunda otomatik gösterilir.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BlogHero


