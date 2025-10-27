import React from 'react'

const AboutHeader = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={`${import.meta.env.BASE_URL}headers/about.jpg`}
          alt="About Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="max-w-full h-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-center">
        <div className="text-center w-full -mt-52">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center justify-center p-2 bg-gray-100 backdrop-blur-sm rounded-full">
              <span className="px-4 py-1 text-sm font-medium text-gray-900">Bizim Hikayemiz</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
            Dijital Dünyada
            <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Çözüm Ortağınız
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 text-center">
            Modern web tasarımı ve geliştirme konusunda uzmanlaşmış bir ekibiz. 
            İşletmelerin dijital dönüşümünde yanlarında olarak, güçlü ve etkili 
            web çözümleri sunuyoruz.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-gray-900 text-center">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              <span className="text-sm font-medium">Profesyonel Ekip</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              <span className="text-sm font-medium">Modern Teknolojiler</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              <span className="text-sm font-medium">7/24 Destek</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHeader
