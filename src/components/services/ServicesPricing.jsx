import React from 'react'
import '../../css/services/ServicesPricing.css'

const ServicesPricing = () => {
  const pricingPlans = [
    {
      name: "Başlangıç",
      price: "₺2,500",
      period: "tek seferlik",
      description: "Küçük işletmeler için temel web sitesi",
      features: [
        "5 Sayfa",
        "Responsive Tasarım",
        "Temel SEO",
        "1 Yıl Hosting",
        "E-posta Desteği"
      ],
      popular: false
    },
    {
      name: "Profesyonel",
      price: "₺5,000",
      period: "tek seferlik",
      description: "Orta ölçekli işletmeler için kapsamlı çözüm",
      features: [
        "10 Sayfa",
        "Özel Tasarım",
        "Gelişmiş SEO",
        "CMS Entegrasyonu",
        "Sosyal Medya Entegrasyonu",
        "1 Yıl Hosting",
        "Öncelikli Destek"
      ],
      popular: true
    },
    {
      name: "Kurumsal",
      price: "₺10,000",
      period: "tek seferlik",
      description: "Büyük işletmeler için enterprise çözüm",
      features: [
        "Sınırsız Sayfa",
        "Özel Geliştirme",
        "E-ticaret Entegrasyonu",
        "API Entegrasyonu",
        "Güvenlik Sertifikası",
        "1 Yıl Hosting",
        "7/24 Destek",
        "Aylık Bakım"
      ],
      popular: false
    }
  ]

  return (
    <section className="services-pricing section">
      <div className="container">
        <div className="pricing-header text-center">
          <h2 className="section-title">Fiyatlandırma</h2>
          <p className="section-subtitle">
            Projenizin büyüklüğüne göre size uygun paketi seçin
          </p>
        </div>
        
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">En Popüler</div>}
              
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>
              
              <ul className="plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="#iletisim" className="plan-button">
                Paketi Seç
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPricing
