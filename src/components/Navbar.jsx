import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '/src/css/Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="logo">
            <Link to="/">
              <span className="logo-text">WebSite Pro</span>
            </Link>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link active">Ana Sayfa</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">Hakkımızda</Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link">Portfolyo</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">İletişim</Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="nav-link">SSS</Link>
              </li>
            </ul>
          </nav>

          <div className="navbar-actions">
            <Link to="/contact" className="btn btn-primary">Hemen Başla</Link>
            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
