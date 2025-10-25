import React, { useState, useEffect } from 'react'
import DeviceStack from './DeviceStack'
import '../../css/home/HeroSection.css'

const HeroSection = () => {
  const [displayText1, setDisplayText1] = useState('')
  const [displayText2, setDisplayText2] = useState('')
  const [displayText3, setDisplayText3] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const text1 = "Modern Web Tasarımı ile "
  const text2 = "Markanızı"
  const text3 = " Öne Çıkarın"
  
  useEffect(() => {
    if (currentIndex < text1.length) {
      const timeout = setTimeout(() => {
        setDisplayText1(prev => prev + text1[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 50)
      return () => clearTimeout(timeout)
    } else if (currentIndex < text1.length + text2.length) {
      const timeout = setTimeout(() => {
        setDisplayText2(prev => prev + text2[currentIndex - text1.length])
        setCurrentIndex(prev => prev + 1)
      }, 50)
      return () => clearTimeout(timeout)
    } else if (currentIndex < text1.length + text2.length + text3.length) {
      const timeout = setTimeout(() => {
        setDisplayText3(prev => prev + text3[currentIndex - text1.length - text2.length])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text1, text2, text3])
  
  return (
    <section className="hero-section" id="anasayfa">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="typewriter-text">
                {displayText1}
                <span className="highlight">{displayText2}</span>
                {displayText3}
                <span className="cursor">|</span>
              </span>
            </h1>
            <p className="hero-description">
              Profesyonel web tasarımı ve geliştirme hizmetleri ile işletmenizi dijital dünyada güçlendirin. 
              Modern, hızlı ve kullanıcı dostu web siteleri tasarlıyoruz.
            </p>
            <div className="hero-actions">
              <a href="/services" className="btn btn-primary">
                Projenizi Başlatın
              </a>
              <a href="/about" className="btn btn-secondary">
                Daha Fazla Bilgi
              </a>
            </div>
          </div>
          <div className="hero-image">
            <DeviceStack />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
