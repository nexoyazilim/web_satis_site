import React from 'react'
import '../../css/about/AboutFeatures.css'

const AboutFeatures = () => {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: "Hızlı ve Modern",
      description: "En son teknolojileri kullanarak hızlı ve modern web siteleri geliştiriyoruz."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "Güvenli ve Stabil",
      description: "Güvenlik ve stabilite önceliğimizdir. Her projede en yüksek standartları uygularız."
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
      description: "Deneyimli tasarımcı ve geliştiricilerden oluşan profesyonel ekibimizle çalışıyoruz."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Kaliteli Çözümler",
      description: "Her projede mükemmellik hedefliyoruz ve kaliteli çözümler sunuyoruz."
    }
  ]

  return (
    <section className="about-features section">
      <div className="container">
        <div className="features-header text-center">
          <h2 className="section-title">Neden Bizi Seçmelisiniz?</h2>
          <p className="section-subtitle">
            Web tasarımı ve geliştirme konusunda sunduğumuz avantajlar
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutFeatures
