import React from 'react'

const ServicesHeader = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={`${import.meta.env.BASE_URL}headers/services.jpg`}
          alt="Services Background" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      <div className="max-w-full h-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-center">
        <div className="text-center w-full -mt-32">
          <div className="inline-flex items-center justify-center p-2 bg-white/80 backdrop-blur-sm rounded-full mb-6">
            <span className="px-4 py-1 text-sm font-medium text-gray-900">Profesyonel Web Çözümleri</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Dijital Dönüşümünüzde
            <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Yanınızdayız
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Modern web tasarımı, e-ticaret çözümleri, mobil uyumlu responsive tasarımlar, 
            SEO optimizasyonu ve dijital pazarlama hizmetleriyle işletmenizi dijital dünyada 
            zirveye taşıyoruz. Hız, güvenlik ve kullanıcı deneyimini ön planda tutarak, 
            markanızı rakiplerinizden bir adım öne çıkarıyoruz.
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
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              <span className="font-medium">Hızlı Yükleme</span>
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
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span className="font-medium">Güvenli Altyapı</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHeader
