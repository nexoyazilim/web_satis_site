import React from 'react'
import ServicesHeader from '../components/services/ServicesHeader'
import ServicesGrid from '../components/services/ServicesGrid'
import ServicesProcess from '../components/services/ServicesProcess'
import ServicesPricing from '../components/services/ServicesPricing'

const Services = () => {
  return (
    <div>
      <ServicesHeader />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesPricing />
    </div>
  )
}

export default Services
