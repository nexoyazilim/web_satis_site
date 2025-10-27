import React from 'react'

const AboutProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Keşif ve Planlama",
      description: "İhtiyaçlarınızı dinler, hedeflerinizi belirler ve detaylı bir proje planı oluştururuz."
    },
    {
      number: "2",
      title: "Tasarım ",
      description: "Modern ve kullanıcı dostu tasarımlar oluşturur, onayınız için prototip sunumları yaparız."
    },
    {
      number: "3",
      title: "Geliştirme",
      description: "En son teknolojilerle kodlama yaparak, hızlı ve güvenli web çözümleri geliştiririz."
    },
    {
      number: "4",
      title: "Test ve Yayın",
      description: "Kapsamlı testlerden geçirerek projenizi canlıya alır ve sürekli destek sağlarız."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Çalışma Sürecimiz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Başarılı projeler için adım adım izlediğimiz metodoloji
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
                <div className="absolute top-0 right-0 text-[120px] font-bold text-gray-100 leading-none -mt-6 -mr-4 group-hover:text-gray-200 transition-colors">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                    <polyline points="9,18 15,12 9,6"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutProcess

