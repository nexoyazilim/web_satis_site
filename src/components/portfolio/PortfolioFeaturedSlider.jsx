import React, { useRef } from 'react'

const PortfolioFeaturedSlider = ({ items = [] }) => {
  const scrollerRef = useRef(null)

  const scrollByAmount = (amount) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: amount, behavior: 'smooth' })
  }

  const onPrev = () => scrollByAmount(-320)
  const onNext = () => scrollByAmount(320)

  return (
    <section className="pt-6 pb-10 sm:pt-8 sm:pb-14 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Öne Çıkan Demolar</h2>
          <div className="hidden sm:flex gap-2">
            <button aria-label="Önceki" onClick={onPrev} className="h-10 w-10 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50">‹</button>
            <button aria-label="Sonraki" onClick={onNext} className="h-10 w-10 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50">›</button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

          <div
            ref={scrollerRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 sm:px-6 md:px-8"
          >
            {items.map((item) => (
              <div key={item.id} className="snap-start shrink-0 w-[220px] sm:w-[260px] md:w-[300px]">
                <div className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] bg-gray-100 overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 transform scale-100 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">{item.description}</p>
                    <div className="mt-3 flex gap-2">
                      <button className="btn flex-1 text-sm py-2.5 bg-black text-white hover:bg-gray-800 hover:-translate-y-0.5" aria-label={`${item.title} paketleri`}>
                        Paketleri İncele
                      </button>
                      <button className="btn flex-1 text-sm py-2.5 bg-transparent text-black border-2 border-black hover:bg-black hover:text-white" aria-label={`${item.title} demoyu incele`}>
                        Demoyu İncele
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="sm:hidden mt-4 flex justify-center gap-3">
            <button aria-label="Önceki" onClick={onPrev} className="h-10 px-4 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50">Önceki</button>
            <button aria-label="Sonraki" onClick={onNext} className="h-10 px-4 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50">Sonraki</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioFeaturedSlider


