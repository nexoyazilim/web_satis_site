import React, { useState, useEffect } from 'react'
import DeviceStack from './DeviceStack'

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = [
    "Modern Web Tasarımı ile Markanızı Öne Çıkarın",
    "Mobil Uyumlu ve Hızlı Web Çözümleri",
    "Profesyonel E-Ticaret Platformları"
  ]
  
  const currentText = texts[currentTextIndex]
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 80
    const delayAfterComplete = 3000 // 3 saniye
    
    if (!isDeleting && currentCharIndex < currentText.length) {
      // Yazma işlemi
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, currentCharIndex + 1))
        setCurrentCharIndex(prev => prev + 1)
      }, typeSpeed)
      return () => clearTimeout(timeout)
    } else if (!isDeleting && currentCharIndex === currentText.length) {
      // Yazma tamamlandı, bekle
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, delayAfterComplete)
      return () => clearTimeout(timeout)
    } else if (isDeleting && currentCharIndex > 0) {
      // Silme işlemi
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, currentCharIndex - 1))
        setCurrentCharIndex(prev => prev - 1)
      }, typeSpeed)
      return () => clearTimeout(timeout)
    } else if (isDeleting && currentCharIndex === 0) {
      // Silme tamamlandı, sonraki metne geç
      setIsDeleting(false)
      setCurrentTextIndex(prev => (prev + 1) % texts.length)
    }
  }, [currentCharIndex, currentText, isDeleting, texts, currentTextIndex])
  
  return (
    <section className="lg:py-[120px] px-5 bg-cover bg-center bg-no-repeat min-h-screen flex items-start relative" style={{backgroundImage: 'url(/5523726.jpg)'}} id="anasayfa">
      <div className="absolute inset-0 bg-white/40"></div>
      <div className="relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:gap-12">
          <div className=" w-full px-10">
            <h1 className="px-[60px] text-3xl lg:text-[41px] font-bold leading-tight mb-0 text-black relative z-0 drop-shadow-lg">
              {displayText}
              <span className="animate-pulse ml-1">|</span>
            </h1>
            <p className="py-5 px-[60px] text-xl leading-relaxed text-gray-800 mb-0 relative z-0 drop-shadow-lg">
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
          <div className="flex justify-start items-center relative justify-self-start z-20">
            <DeviceStack />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
