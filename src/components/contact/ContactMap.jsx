import React from 'react'
import '../../css/contact/ContactMap.css'

const ContactMap = () => {
  return (
    <section className="contact-map section">
      <div className="container">
        <div className="map-container">
          <div className="map-header text-center">
            <h2>Ofisimizi Ziyaret Edin</h2>
            <p>İstanbul'daki ofisimizde buluşalım ve projelerinizi konuşalım.</p>
          </div>
          
          <div className="map-content">
            <div className="map-placeholder">
              <div className="map-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>Harita</h3>
              <p>İstanbul, Türkiye</p>
              <a href="#" className="map-link">
                Google Maps'te Aç
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7,7 17,7 17,17"/>
                </svg>
              </a>
            </div>
            
            <div className="map-info">
              <div className="info-item">
                <h4>Adres</h4>
                <p>İstanbul, Türkiye</p>
              </div>
              <div className="info-item">
                <h4>Çalışma Saatleri</h4>
                <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                <p>Cumartesi: 10:00 - 16:00</p>
              </div>
              <div className="info-item">
                <h4>Randevu</h4>
                <p>Ofisimizi ziyaret etmek için önceden randevu almanızı öneririz.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMap
