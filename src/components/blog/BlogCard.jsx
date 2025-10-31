import React from 'react'

const BlogCard = ({ title, image, excerpt, date }) => {
  return (
    <div className="group relative rounded-2xl transition-all duration-300 h-full flex flex-col">
      <div className="p-[1px] rounded-2xl bg-gradient-to-tr from-gray-200 via-gray-100 to-gray-200 group-hover:from-gray-300 group-hover:via-gray-100 group-hover:to-gray-300 transition-colors h-full flex flex-col">
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm group-hover:shadow-lg ring-1 ring-gray-200/70 h-full flex flex-col">
          <div className="relative aspect-[16/10] bg-gray-50 overflow-hidden flex-shrink-0">
            {image ? (
              <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">Görsel yok</div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="p-5 flex flex-col flex-grow">
            <p className="text-xs text-gray-500">{date}</p>
            <h3 className="mt-1 text-lg font-semibold text-gray-900 line-clamp-2">{title}</h3>
            <p className="mt-2 text-sm text-gray-600 line-clamp-3">{excerpt}</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-black/5 transition-all pointer-events-none"></div>
    </div>
  )
}

export default BlogCard


