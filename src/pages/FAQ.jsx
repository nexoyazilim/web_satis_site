import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Web sitesi tasarımı ne kadar sürer?",
      answer: "Projenin büyüklüğüne bağlı olarak, basit bir web sitesi 2-3 hafta, daha karmaşık projeler 6-8 hafta sürebilir. İlk görüşmede size detaylı bir zaman çizelgesi sunuyoruz."
    },
    {
      question: "Web sitesi maliyeti nasıl belirlenir?",
      answer: "Maliyet, sayfa sayısı, özel tasarım ihtiyacı, e-ticaret entegrasyonu, CMS özellikleri ve ek fonksiyonlara göre değişir. Ücretsiz danışmanlık görüşmesinde projenize özel teklif hazırlıyoruz."
    },
    {
      question: "Web sitem mobil uyumlu olacak mı?",
      answer: "Kesinlikle! Tüm web sitelerimiz responsive tasarım ile gelir, yani telefon, tablet ve masaüstü gibi tüm cihazlarda mükemmel görünür. Bu, günümüzde standart bir uygulamadır."
    },
    {
      question: "SEO optimizasyonu dahil mi?",
      answer: "Evet, tüm web sitelerimize temel SEO optimizasyonu dahildir. Sayfa başlıkları, meta açıklamaları, hız optimizasyonu ve arama motorları için gerekli teknik ayarları yapıyoruz. Daha gelişmiş SEO hizmetleri için ekstra paketlerimiz var."
    },
    {
      question: "Hosting ve domain size mi ait olacak?",
      answer: "Hosting ve domain hizmetlerinde yardımcı oluyoruz, ancak bunlar size ait olur. Böylece web sitenizin tam kontrolü sizde olur. İsterseniz bizim önerdiğimiz güvenilir hosting sağlayıcıları kullanabilirsiniz."
    },
    {
      question: "Site teslim edildikten sonra destek veriyor musunuz?",
      answer: "Evet, teslimattan sonra 1 ay ücretsiz teknik destek sağlıyoruz. Ayrıca 7/24 destek ve aylık bakım paketlerimiz ile sürekli yanınızdayız."
    },
    {
      question: "İçerik yönetim sistemi (CMS) kullanabiliyor muyum?",
      answer: "Evet, WordPress, React veya custom CMS sistemleri ile çalışıyoruz. Böylece siz de web sitenizin içeriğini kolayca güncelleyebilirsiniz. Size özel eğitim de veriyoruz."
    },
    {
      question: "E-ticaret sitesi yapabiliyor musunuz?",
      answer: "Tabii ki! Tam teşekküllü e-ticaret siteleri tasarlıyoruz. Ürün yönetimi, ödeme entegrasyonları, kargo sistemleri ve stok takibi gibi tüm özellikler dahil. Shopify, WooCommerce veya özel çözümler sunuyoruz."
    },
    {
      question: "Mevcut web sitemi yenileyebilir misiniz?",
      answer: "Elbette! Mevcut web sitenizi modern bir tasarım ve teknolojiyle yeniden yapılandırabilir, performansını artırabilir ve yeni özellikler ekleyebiliriz. Mevcut içeriğinizi koruyarak veya yeni baştan tasarlayarak hizmet veriyoruz."
    },
    {
      question: "Ödeme nasıl yapılır?",
      answer: "Genellikle %50 peşin, %50 teslimat sonrası şeklinde çalışıyoruz. Büyük projelerde aşamalı ödeme planları oluşturulabilir. Kredi kartı, havale veya kapıda ödeme gibi farklı ödeme seçenekleri sunuyoruz."
    },
    {
      question: "Logo ve grafik tasarım hizmeti veriyor musunuz?",
      answer: "Evet, kurumsal kimlik, logo tasarımı, banner ve sosyal medya görselleri gibi tüm grafik tasarım hizmetlerini sunuyoruz. Web tasarımıyla uyumlu profesyonel görseller hazırlıyoruz."
    },
    {
      question: "Web siteme sonradan özellik eklenebilir mi?",
      answer: "Kesinlikle! Web sitenizi ölçeklenebilir şekilde tasarlıyoruz. İleride blog, e-ticaret, üyelik sistemi gibi yeni özellikler eklemek isterseniz kolayca entegre edebiliriz."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      {/* Header Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={`${import.meta.env.BASE_URL}headers/sss.jpg`}
            alt="FAQ Background" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        
        <div className="max-w-full h-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-center">
          <div className="text-center w-full -mt-32">
            <div className="inline-flex items-center justify-center p-2 bg-white/80 backdrop-blur-sm rounded-full mb-6">
              <span className="px-4 py-1 text-sm font-medium text-gray-900">Size Yardımcı Olalım</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Sıkça Sorulan
              <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Sorular
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Web tasarımı ve geliştirme süreçleri hakkında merak ettiğiniz her şey burada. 
              Cevabını bulamadığınız sorular için bize ulaşabilirsiniz.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-gray-900">
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                <span className="font-medium">Detaylı Cevaplar</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <span className="font-medium">Anında Destek</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22,4 12,14.01 9,11.01"/>
                </svg>
                <span className="font-medium">Doğru Bilgi</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800">
                  <path d="M12 2v20M2 12h20"/>
                </svg>
                <span className="font-medium">Daha Fazlası</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {faqs.map((faq, index) => (
              <div 
                key={`faq-${index}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 self-start"
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFAQ(index);
                  }}
                  className="w-full text-left p-6 flex justify-between items-start focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8 flex-1">
                    {faq.question}
                  </h3>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className={`flex-shrink-0 text-gray-600 transition-transform duration-300 mt-1 ${
                      openIndex === index ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    <polyline points="6,9 12,15 18,9"/>
                  </svg>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Başka Sorularınız mı Var?
            </h3>
            <p className="text-gray-600 mb-6">
              Aklınıza takılan başka sorular varsa, bizimle iletişime geçmekten çekinmeyin. 
              Size yardımcı olmaktan mutluluk duyarız.
            </p>
            <a 
              href="/iletisim" 
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              İletişime Geçin
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
