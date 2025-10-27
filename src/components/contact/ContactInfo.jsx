import React from 'react'

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: "Telefon",
      content: "+90 (555) 123 45 67",
      link: "tel:+905551234567",
      description: "Pazartesi - Cuma: 09:00 - 18:00"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: "E-posta",
      content: "info@monochrome.com",
      link: "mailto:info@monochrome.com",
      description: "24 saat içinde yanıt veriyoruz"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      title: "Adres",
      content: "İstanbul, Türkiye",
      link: "#",
      description: "Ofisimizi ziyaret edebilirsiniz"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Bize Ulaşın</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Web tasarımı ve geliştirme projeleriniz için uzman ekibimizle iletişime geçin. 
                Size özel çözümler geliştirmek için buradayız.
              </p>
              <p>
                Projeniz hakkında detaylı bilgi almak veya ücretsiz danışmanlık için 
                aşağıdaki iletişim bilgilerini kullanabilirsiniz.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <a key={index} href={method.link} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-gray-800 mt-1">
                  {method.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h4>
                  <p className="text-gray-900 font-medium mb-1">{method.content}</p>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
