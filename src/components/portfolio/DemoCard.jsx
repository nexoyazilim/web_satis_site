import React from 'react'

const DemoCard = ({ title, image, description, tags = [] }) => {
  return (
    <div className="group relative rounded-2xl transition-all duration-300">
      <div className="p-[1px] rounded-2xl bg-gradient-to-tr from-gray-200 via-gray-100 to-gray-200 group-hover:from-gray-300 group-hover:via-gray-100 group-hover:to-gray-300 transition-colors">
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm group-hover:shadow-lg ring-1 ring-gray-200/70">
          <div className="relative aspect-[16/10] bg-gray-50 overflow-hidden p-3 flex items-center justify-center">
        <img
          src={image}
          alt={title}
              className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="p-5">
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-1 text-sm text-gray-600 line-clamp-2">{description}</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button className="btn btn-primary" aria-label={`${title} paketleri`}>
                Paketleri İncele
              </button>
              <button className="btn btn-secondary" aria-label={`${title} demoyu incele`}>
                Demoyu İncele
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-black/5 transition-all"></div>
    </div>
  )
}

export default DemoCard


