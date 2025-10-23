import React from 'react'
import '../../css/about/AboutHeader.css'

const AboutHeader = () => {
  return (
    <section className="about-header section-lg">
      <div className="container">
        <div className="about-header-content text-center">
          <h1 className="page-title">Hakkımızda</h1>
          <p className="page-subtitle">
            Modern web tasarımı ve geliştirme konusunda uzmanlaşmış bir ekibiz. 
            İşletmenizin dijital varlığını güçlendirmek için buradayız.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutHeader
