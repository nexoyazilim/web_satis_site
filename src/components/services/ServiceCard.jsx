import React from 'react'
import '../../css/services/ServiceCard.css'

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        {service.icon}
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <ul className="service-features">
        {service.features.map((feature, index) => (
          <li key={index} className="feature-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20,6 9,17 4,12"/>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <a href="#iletisim" className="service-link">
        Detaylı Bilgi
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="7" y1="17" x2="17" y2="7"/>
          <polyline points="7,7 17,7 17,17"/>
        </svg>
      </a>
    </div>
  )
}

export default ServiceCard
