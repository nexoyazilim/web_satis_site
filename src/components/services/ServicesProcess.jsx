import React from 'react'

const ServicesProcess = () => {
  const processSteps = [
    {
      step: "01",
      title: "İhtiyaç Analizi",
      description: "Projenizin gereksinimlerini detaylı olarak analiz ediyoruz ve size en uygun çözümü belirliyoruz."
    },
    {
      step: "02", 
      title: "Tasarım & Planlama",
      description: "Modern tasarım prensipleri ile projenizi planlıyoruz ve wireframe'ler oluşturuyoruz."
    },
    {
      step: "03",
      title: "Geliştirme",
      description: "En son teknolojileri kullanarak projenizi kodluyoruz ve test ediyoruz."
    },
    {
      step: "04",
      title: "Teslimat & Destek",
      description: "Projenizi teslim ediyoruz ve sürekli destek sağlıyoruz."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Çalışma Sürecimiz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projelerinizi adım adım nasıl hayata geçirdiğimizi keşfedin
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform translate-x-4">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                      <path d="M5 12h14"/>
                      <path d="M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesProcess
