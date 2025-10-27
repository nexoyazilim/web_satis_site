import React from 'react'

const Portfolio = () => {
  const demoWebsites = [
    {
      id: 1,
      title: "E-Ticaret Sitesi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Modern e-ticaret platformu"
    },
    {
      id: 2,
      title: "Kurumsal Web Sitesi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Profesyonel kurumsal tasarım"
    },
    {
      id: 3,
      title: "Restoran Sitesi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Lezzetli menüler ve rezervasyon"
    },
    {
      id: 4,
      title: "Blog Sitesi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Kişisel blog ve içerik yönetimi"
    },
    {
      id: 5,
      title: "Portfolyo Sitesi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Yaratıcı portfolyo gösterimi"
    },
    {
      id: 6,
      title: "Spa & Wellness",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Rahatlatıcı spa deneyimi"
    },
    {
      id: 7,
      title: "Emlak Sitesi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Emlak ilanları ve arama"
    },
    {
      id: 8,
      title: "Eğitim Platformu",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Online eğitim ve kurslar"
    },
    {
      id: 9,
      title: "Seyahat Sitesi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Seyahat rehberi ve rezervasyon"
    },
    {
      id: 10,
      title: "Teknoloji Blogu",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Teknoloji haberleri ve analiz"
    },
    {
      id: 11,
      title: "Fitness Merkezi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Spor salonu ve fitness programları"
    },
    {
      id: 12,
      title: "Moda Mağazası",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Trend moda ve stil önerileri"
    }
  ]

  return (
    <div>
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={`${import.meta.env.BASE_URL}headers/demo.PNG`}
            alt="Portfolio Background" 
            className="w-full h-full object-cover opacity-100"
          />
        </div>
        
        <div className="max-w-full h-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-center">
          <div className="text-center w-full -mt-32">
            <div className="inline-flex items-center justify-center p-2 bg-white/80 backdrop-blur-sm rounded-full mb-6">
              <span className="px-4 py-1 text-sm font-medium text-gray-900">Referans Çalışmalarımız</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Demo Siteler
              <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                İlham Alın
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Farklı sektörlerden hazırladığımız profesyonel demo web sitelerini inceleyin. 
              Her bir tasarım, işletmenizin ihtiyaçlarına göre özelleştirilebilir ve 
              kısa sürede hayata geçirilebilir.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-gray-900">
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22,4 12,14.01 9,11.01"/>
                </svg>
                <span className="font-medium">SEO Uyumlu</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12" y2="18"/>
                </svg>
                <span className="font-medium">Mobil Uyumlu</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                <span className="font-medium">Hızlı Yükleme</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
                <span className="font-medium">Modern Tasarım</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {demoWebsites.map((website) => (
              <div key={website.id} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
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
        </div>
      </div>
    </div>
  )
}

export default Portfolio
