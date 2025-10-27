import React from 'react'

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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Fiyatlandırma</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projenizin büyüklüğüne göre size uygun paketi seçin
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`group relative bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ${!plan.popular ? 'overflow-hidden' : ''} ${plan.popular ? 'ring-2 ring-gray-800' : ''}`}>
              {!plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gray-800 group-hover:w-full transition-all duration-500"></div>
              )}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium">En Popüler</span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600 mr-3 flex-shrink-0">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#iletisim" className={`w-full btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} block text-center`}>
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
