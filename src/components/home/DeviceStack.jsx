import React from 'react'

const DeviceStack = () => {
  return (
    <div className="flex justify-center items-center relative w-full h-full">
      <div className="relative  flex justify-center items-center">
        {/* Laptop - Bottom layer - animates from left */}
        <div className="absolute flex justify-center items-center z-10 animate-slide-in-left">
          <img 
            src={`${import.meta.env.BASE_URL}laptop.png`}
            alt="Laptop" 
            className="object-contain drop-shadow-2xl !w-[700px] !max-w-none " 
          />
        </div>
        
        {/* Tablet - Middle layer - animates from bottom */}
        <div className="absolute top-10 left-96 z-20 relative animate-slide-in-bottom">
          <img src={`${import.meta.env.BASE_URL}tablet.png`} alt="Tablet" className="object-contain drop-shadow-2xl w-[250px]" />
        </div>
        
        {/* Phone - Top layer - animates from right */}
        <div className="absolute top-20 left-72 z-30 relative animate-slide-in-right">
          <img src={`${import.meta.env.BASE_URL}iphone.png`} alt="iPhone" className="object-contain drop-shadow-2xl w-[150px]" />
        </div>
      </div>
    </div>
  )
}

export default DeviceStack
