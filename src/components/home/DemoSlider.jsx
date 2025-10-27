import React, { useState, useRef, useEffect } from 'react'

const DemoSlider = () => {
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const translateX = useRef(0)
  const sliderRef = useRef(null)
  const animationRef = useRef(null)
  const [, forceUpdate] = useState(0)

  const updateTranslate = (newValue) => {
    translateX.current = newValue
    forceUpdate(prev => prev + 1)
  }

  useEffect(() => {
    if (isPaused || isDragging) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      return
    }

    let lastTime = performance.now()
    
    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime
      lastTime = currentTime
      
      const speed = 0.5 // px per frame
      updateTranslate(translateX.current - speed)
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animationRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPaused, isDragging])

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setIsPaused(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const diff = e.clientX - startX
    updateTranslate(translateX.current + diff * 0.5)
    setStartX(e.clientX)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
    setIsDragging(false)
  }
  const demoWebsites = [
    {
      id: 1,
      title: "E-Ticaret Sitesi",
      image: "/otelmockup.png",
      description: "Modern e-ticaret platformu"
    },
    {
      id: 2,
      title: "Kurumsal Web Sitesi",
      image: "/otelmockup.png",
      description: "Profesyonel kurumsal tasarım"
    },
    {
      id: 3,
      title: "Restoran Sitesi",
      image: "/otelmockup.png",
      description: "Lezzetli menüler ve rezervasyon"
    },
    {
      id: 4,
      title: "Blog Sitesi",
      image: "/otelmockup.png",
      description: "Kişisel blog ve içerik yönetimi"
    },
    {
      id: 5,
      title: "Portfolyo Sitesi",
      image: "/otelmockup.png",
      description: "Yaratıcı portfolyo gösterimi"
    },
    {
      id: 6,
      title: "Spa & Wellness",
      image: "/otelmockup.png",
      description: "Rahatlatıcı spa deneyimi"
    },
    {
      id: 7,
      title: "Emlak Sitesi",
      image: "/otelmockup.png",
      description: "Emlak ilanları ve arama"
    },
    {
      id: 8,
      title: "Eğitim Platformu",
      image: "/otelmockup.png",
      description: "Online eğitim ve kurslar"
    },
    {
      id: 9,
      title: "Seyahat Sitesi",
      image: "/otelmockup.png",
      description: "Seyahat rehberi ve rezervasyon"
    }
  ]

  return (
    <section className="py-5 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Demo Sitelerimiz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Farklı sektörlerden örnek web sitelerimizi keşfedin
          </p>
        </div>

        <div 
          className="relative overflow-hidden px-[10px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div 
            ref={sliderRef}
            className="flex space-x-6"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ 
              cursor: isDragging ? 'grabbing' : 'grab', 
              userSelect: 'none',
              transform: `translateX(${translateX.current}px)`,
              transition: 'none'
            }}
          >
            {/* İlk set */}
            {demoWebsites.map((website) => (
              <div key={website.id} className="flex-shrink-0 group w-[700px]">
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
                  <div className="bg-gray-100 w-full">
                    {website.image ? (
                      <img 
                        src={website.image} 
                        alt={website.title} 
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">Resim Yok</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6">
                        <h3 className="text-xl font-bold mb-2">{website.title}</h3>
                        <p className="text-sm mb-4">{website.description}</p>
                        <div className="space-y-2">
                          <button className="btn btn-primary w-full">Paketleri İncele</button>
                          <button className="btn btn-secondary w-full">Demoyu İncele</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* İkinci set (sürekli kayma için) */}
            {demoWebsites.map((website) => (
              <div key={`duplicate-${website.id}`} className="flex-shrink-0 w-[700px] group">
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
                  <div className="bg-gray-100 w-full">
                    {website.image ? (
                      <img 
                        src={website.image} 
                        alt={website.title} 
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">Resim Yok</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6">
                        <h3 className="text-xl font-bold mb-2">{website.title}</h3>
                        <p className="text-sm mb-4">{website.description}</p>
                        <div className="space-y-2">
                          <button className="btn btn-primary w-full">Paketleri İncele</button>
                          <button className="btn btn-secondary w-full">Demoyu İncele</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-[80px] bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  )
}

export default DemoSlider
