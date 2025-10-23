import React from 'react'
import '../../css/about/AboutStats.css'

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
    <section className="about-stats section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutStats
