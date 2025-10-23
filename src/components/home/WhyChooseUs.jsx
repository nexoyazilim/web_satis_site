import React from 'react'
import '../../css/home/WhyChooseUs.css'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: "Hızlı Teslimat",
      description: "Projelerinizi zamanında teslim ediyoruz."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "Güvenli Çözümler",
      description: "En yüksek güvenlik standartlarını uygularız."
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
      description: "Deneyimli tasarımcı ve geliştiriciler."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Kaliteli Hizmet",
      description: "Her projede mükemmellik hedefliyoruz."
    }
  ]

  return (
    <section className="why-choose-us section">
      <div className="container">
        <div className="choose-us-content">
          <div className="choose-us-text">
            <h2 className="section-title">Neden Bizi Seçmelisiniz?</h2>
            <p className="section-description">
              Web tasarımı ve geliştirme konusunda sunduğumuz avantajlar ile 
              projelerinizi başarıya ulaştırıyoruz.
            </p>
            <div className="choose-us-stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Tamamlanan Proje</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Yıllık Deneyim</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Müşteri Memnuniyeti</div>
              </div>
            </div>
            <a href="/contact" className="btn btn-primary">
              Hemen Başlayalım
            </a>
          </div>
          
          <div className="choose-us-features">
            {reasons.map((reason, index) => (
              <div key={index} className="reason-card">
                <div className="reason-icon">
                  {reason.icon}
                </div>
                <div className="reason-content">
                  <h3 className="reason-title">{reason.title}</h3>
                  <p className="reason-description">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
