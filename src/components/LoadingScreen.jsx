import React from 'react'

const LoadingScreen = () => {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const start = Date.now()
    const duration = 2000
    const tick = () => {
      const elapsed = Date.now() - start
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(pct)
      if (pct < 100) requestAnimationFrame(tick)
    }
    const raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="relative w-56 h-56 mx-auto">
          {/* Central logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={`${import.meta.env.BASE_URL}technologyicons/nexo_logo.png`}
              alt="nexo_logo"
              className="w-24 h-24 object-contain"
            />
          </div>

          {/* Orbits */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Laptop orbit (outer) */}
            <div className="animate-spin" style={{ animationDuration: '6s' }}>
              <div className="transform -translate-y-24">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-900">
                  <rect x="3" y="4" width="18" height="12" rx="2" ry="2" strokeWidth="1.8"/>
                  <path d="M2 18h20" strokeWidth="1.8"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Symmetric tablet + phone orbit (shared ring) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin" style={{ animationDuration: '4s' }}>
              {/* Top: Tablet */}
              <div className="transform -translate-y-20">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-800">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeWidth="1.8"/>
                  <circle cx="12" cy="18" r="0.8" fill="currentColor" />
                </svg>
              </div>
              {/* Bottom: Phone (opposite, symmetric) */}
              <div className="transform translate-y-20 rotate-180">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-700">
                  <rect x="8" y="2" width="8" height="20" rx="2" ry="2" strokeWidth="1.8"/>
                  <circle cx="12" cy="18.5" r="0.8" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="h-1 w-56 bg-gray-200 rounded overflow-hidden mx-auto">
            <div
              className="h-full bg-black transition-[width]"
              style={{ width: `${progress}%`, transitionDuration: '100ms' }}
            />
          </div>
          <p
            className="mt-3 text-sm font-medium bg-gradient-to-r from-black to-black bg-clip-text text-transparent"
            style={{ backgroundSize: `${progress}% 100%`, backgroundRepeat: 'no-repeat' }}
          >
            yükleniyor…
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen


