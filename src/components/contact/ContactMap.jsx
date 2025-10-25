import React from 'react'

const ContactMap = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ofisimizi Ziyaret Edin</h2>
            <p className="text-gray-600">İstanbul'daki ofisimizde buluşalım ve projelerinizi konuşalım.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-800">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Harita</h3>
              <p className="text-gray-600 mb-4">İstanbul, Türkiye</p>
              <a href="#" className="inline-flex items-center text-gray-800 hover:text-black font-medium">
                Google Maps'te Aç
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7,7 17,7 17,17"/>
                </svg>
              </a>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Adres</h4>
                <p className="text-gray-600">İstanbul, Türkiye</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Çalışma Saatleri</h4>
                <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 18:00</p>
                <p className="text-gray-600">Cumartesi: 10:00 - 16:00</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Randevu</h4>
                <p className="text-gray-600">Ofisimizi ziyaret etmek için önceden randevu almanızı öneririz.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMap
