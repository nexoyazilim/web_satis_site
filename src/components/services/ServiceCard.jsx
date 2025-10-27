import React from 'react'

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="text-gray-800 mb-6">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
      <ul className="space-y-3 mb-6">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600 mr-3 flex-shrink-0">
              <polyline points="20,6 9,17 4,12"/>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <a href="#iletisim" className="inline-flex items-center text-gray-800 hover:text-black font-medium transition-colors">
        Detaylı Bilgi
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
          <line x1="7" y1="17" x2="17" y2="7"/>
          <polyline points="7,7 17,7 17,17"/>
        </svg>
      </a>
    </div>
  )
}

export default ServiceCard
