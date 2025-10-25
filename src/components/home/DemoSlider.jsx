import React from 'react'

const DemoSlider = () => {
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Demo Sitelerimiz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Farklı sektörlerden örnek web sitelerimizi keşfedin
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="flex animate-scroll space-x-6">
            {/* İlk set */}
            {demoWebsites.map((website) => (
              <div key={website.id} className="flex-shrink-0 w-80 group">
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
                  <div className="aspect-[4/3] overflow-hidden">
                    {website.image ? (
                      <img 
                        src={website.image} 
                        alt={website.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
              <div key={`duplicate-${website.id}`} className="flex-shrink-0 w-80 group">
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
                  <div className="aspect-[4/3] overflow-hidden">
                    {website.image ? (
                      <img 
                        src={website.image} 
                        alt={website.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  )
}

export default DemoSlider
