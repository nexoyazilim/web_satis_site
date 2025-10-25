import React from 'react'

const AboutStats = () => {
  const stats = [
    {
      number: "50+",
      label: "Tamamlanan Proje",
      description: "Başarıyla tamamladığımız proje sayısı"
    },
    {
      number: "5+",
      label: "Yıllık Deneyim",
      description: "Web tasarımı ve geliştirme alanında deneyim"
    },
    {
      number: "100%",
      label: "Müşteri Memnuniyeti",
      description: "Müşterilerimizin memnuniyet oranı"
    },
    {
      number: "24/7",
      label: "Destek",
      description: "Kesintisiz teknik destek hizmeti"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutStats
