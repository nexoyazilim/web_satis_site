import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-black hover:text-gray-600 transition-colors">
              WebSite Pro
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-black hover:text-gray-600 transition-colors font-medium relative group">
              Ana Sayfa
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-black transition-colors font-medium relative group">
              Hakkımızda
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-black transition-colors font-medium relative group">
              Hizmetler
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/portfolio" className="text-gray-600 hover:text-black transition-colors font-medium relative group">
              Demo Siteler
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-black transition-colors font-medium relative group">
              İletişim
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/faq" className="text-gray-600 hover:text-black transition-colors font-medium relative group">
              SSS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/contact" className="btn btn-primary hidden sm:inline-block">
              Hemen Başla
            </Link>
            <button 
              className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-black hover:text-gray-600 transition-colors font-medium relative group">
                Ana Sayfa
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-black transition-colors font-medium relative group">
                Hakkımızda
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/services" className="text-gray-600 hover:text-black transition-colors font-medium relative group">
                Hizmetler
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/portfolio" className="text-gray-600 hover:text-black transition-colors font-medium relative group">
                Demo Siteler
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-black transition-colors font-medium relative group">
                İletişim
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/faq" className="text-gray-600 hover:text-black transition-colors font-medium relative group">
                SSS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/contact" className="btn btn-primary mt-4">
                Hemen Başla
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
