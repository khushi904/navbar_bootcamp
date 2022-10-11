import React from 'react'
import SectionTitle from './SectionTitle'
import services from '../data/services'
import ServiceItem from './ServiceItem'
function Services() {
  return (
    <div className='py-12'>
      <SectionTitle children="Our Services" />
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {services.map(service => (
          <ServiceItem key={service.title}
            title={service.title}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </div>
    </div>

  )
}

export default Services