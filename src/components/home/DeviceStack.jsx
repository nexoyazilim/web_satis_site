import React from 'react'
import '../../css/home/DeviceStack.css'

const DeviceStack = () => {
  return (
    <div className="device-stack">
      <div className="device-container">
        {/* Laptop - Bottom layer */}
        <div className="device laptop-device">
          <img src="/laptop.png" alt="Laptop" className="device-image laptop-image" />
        </div>
        
        {/* Tablet - Middle layer */}
        <div className="device tablet-device">
          <img src="/tablet.png" alt="Tablet" className="device-image tablet-image" />
        </div>
        
        {/* Phone - Top layer */}
        <div className="device phone-device">
          <img src="/iphone.png" alt="iPhone" className="device-image phone-image" />
        </div>
      </div>
    </div>
  )
}

export default DeviceStack
