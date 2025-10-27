import React from 'react'

const AboutMissionVision = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-10 rounded-2xl">
            <div className="mb-6">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800 mb-4">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Misyonumuz</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              İşletmelerin dijital dünyada güçlü bir varlık oluşturmasına yardımcı olmak. 
              Modern teknolojiler ve yaratıcı tasarımlarla, müşterilerimizin hedef kitlesine 
              en etkili şekilde ulaşmasını sağlamak.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-10 rounded-2xl">
            <div className="mb-6">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800 mb-4">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vizyonumuz</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Türkiye'nin önde gelen web tasarım ve geliştirme ajansı olmak. 
              İnovasyon ve kalite odaklı yaklaşımımızla sektörde standartları belirleyen, 
              müşteri memnuniyetinde öncü bir marka olmak.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMissionVision

