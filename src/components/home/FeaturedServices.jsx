import React from 'react'
import '../../css/home/FeaturedServices.css'

const FeaturedServices = () => {
  const services = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: "Web Tasarımı",
      description: "Modern ve kullanıcı dostu web siteleri tasarlıyoruz."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16,18 22,12 16,6"/>
          <polyline points="8,6 2,12 8,18"/>
        </svg>
      ),
      title: "Web Geliştirme",
      description: "React, Vue.js ile hızlı ve güvenli web uygulamaları."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "SEO Optimizasyonu",
      description: "Arama motorlarında üst sıralarda yer alın."
    }
  ]

  return (
    <section className="featured-services section">
      <div className="container">
        <div className="services-header text-center">
          <h2 className="section-title">Hizmetlerimiz</h2>
          <p className="section-subtitle">
            İşletmenizin dijital ihtiyaçlarını karşılamak için kapsamlı hizmetler sunuyoruz.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="/services" className="service-link">
                Detaylı Bilgi
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7,7 17,7 17,17"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        <div className="services-cta text-center">
          <a href="/services" className="btn btn-primary">
            Tüm Hizmetleri Gör
          </a>
        </div>
      </div>
    </section>
  )
}

export default FeaturedServices
