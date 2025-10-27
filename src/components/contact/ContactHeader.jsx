import React from 'react'

const ContactHeader = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={`${import.meta.env.BASE_URL}headers/contact.jpg`}
          alt="Contact Background" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      <div className="max-w-full h-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-center">
        <div className="text-center w-full -mt-32">
          <div className="inline-flex items-center justify-center p-2 bg-white/80 backdrop-blur-sm rounded-full mb-6">
            <span className="px-4 py-1 text-sm font-medium text-gray-900">Sizinle Çalışmak İstiyoruz</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Projeleriniz İçin
            <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Buradayız
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Web siteniz, e-ticaret platformunuz veya dijital projeleriniz için ihtiyacınız olan 
            tüm çözümler için bize ulaşın. Uzman ekibimiz, hayalinizdeki projeyi gerçeğe 
            dönüştürmek için sizinle birlikte çalışmaya hazır.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-gray-900">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
              <span className="font-medium">7/24 Destek</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span className="font-medium">Hızlı Yanıt</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22,4 12,14.01 9,11.01"/>
              </svg>
              <span className="font-medium">Ücretsiz Danışmanlık</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
                <polyline points="17,11 19,13 23,9"/>
              </svg>
              <span className="font-medium">Profesyonel Ekip</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHeader
