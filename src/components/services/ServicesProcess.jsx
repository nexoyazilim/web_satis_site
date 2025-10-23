import React from 'react'
import '../../css/services/ServicesProcess.css'

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
    <section className="services-process section">
      <div className="container">
        <div className="process-header text-center">
          <h2 className="section-title">Çalışma Sürecimiz</h2>
          <p className="section-subtitle">
            Projelerinizi adım adım nasıl hayata geçirdiğimizi keşfedin
          </p>
        </div>
        
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.step}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="step-connector">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
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

export default ServicesProcess
