import React, { useState, useEffect } from 'react'
import DeviceStack from './DeviceStack'

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const fullText = "Modern Web Tasarımı ile Markanızı Öne Çıkarın"
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100) // Her karakter arasında 100ms bekleme
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])
  
  return (
    <section className="lg:py-[120px] px-5 bg-gradient-to-br from-gray-50 to-white min-h-screen flex items-start" id="anasayfa">
      <div >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className=" w-full px-10">
            <h1 className="px-[60px] text-3xl lg:text-[41px] font-bold leading-tight mb-0 text-black relative z-0">
              {displayText.split('Markanızı').map((part, index) => (
                <span key={index}>
                  {part}
                  {index === 0 && displayText.includes('Markanızı') && (
                    <span className="text-gray-600">Markanızı</span>
                  )}
                </span>
              ))}
              <span className="animate-pulse">|</span>
            </h1>
            <p className="py-5 px-[60px] text-xl leading-relaxed text-gray-600 mb-0 relative z-0">
               Profesyonel web tasarımı ve geliştirme hizmetleri ile işletmenizi dijital dünyada güçlendirin. 
              Modern, hızlı ve kullanıcı dostu web siteleri tasarlıyoruz.
            </p>
            <div className="px-[60px] flex gap-4 flex-wrap relative z-0 mt-0">
              <a href="/services" className="btn btn-primary">
                Projenizi Başlatın
              </a>
              <a href="/about" className="btn btn-secondary">
                Daha Fazla Bilgi
              </a>
            </div>
          </div>
          <div className="flex justify-start items-center relative justify-self-start z-50">
            <DeviceStack />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
