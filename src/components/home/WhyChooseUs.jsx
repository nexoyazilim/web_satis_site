import React from 'react'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: "Hızlı Teslimat",
      description: "Projelerinizi zamanında teslim ediyoruz."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "Güvenli Çözümler",
      description: "En yüksek güvenlik standartlarını uygularız."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "Uzman Ekip",
      description: "Deneyimli tasarımcı ve geliştiriciler."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Kaliteli Hizmet",
      description: "Her projede mükemmellik hedefliyoruz."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Neden Bizi Seçmelisiniz?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Web tasarımı ve geliştirme konusunda sunduğumuz avantajlar ile 
              projelerinizi başarıya ulaştırıyoruz.
            </p>
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
                <div className="text-sm text-gray-600">Tamamlanan Proje</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-2">5+</div>
                <div className="text-sm text-gray-600">Yıllık Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-2">100%</div>
                <div className="text-sm text-gray-600">Müşteri Memnuniyeti</div>
              </div>
            </div>
            <a href="/contact" className="btn btn-primary">
              Hemen Başlayalım
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-gray-800 mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
