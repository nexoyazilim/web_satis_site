import React from 'react'

const DeviceStack = () => {
  return (
    <div className="flex justify-center items-center relative w-full h-full">
      <div className="relative  flex justify-center items-center">
        {/* Laptop - Bottom layer */}
        <div className="absolute flex justify-center items-center z-10">
          <img 
            src="/laptop.png" 
            alt="Laptop" 
            className="object-contain drop-shadow-2xl !w-[700px] !max-w-none " 
          />
        </div>
        
        {/* Tablet - Middle layer */}
        <div className="absolute top-10 left-96 z-20 relative">
          <img src="/tablet.png" alt="Tablet" className="object-contain drop-shadow-2xl w-[250px]" />
        </div>
        
        {/* Phone - Top layer */}
        <div className="absolute top-20 left-72 z-30 relative">
          <img src="/iphone.png" alt="iPhone" className="object-contain drop-shadow-2xl w-[150px]" />
        </div>
      </div>
    </div>
  )
}

export default DeviceStack
