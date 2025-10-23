import React from 'react'
import '../../css/about/AboutTeam.css'

const AboutTeam = () => {
  const teamMembers = [
    {
      name: "Ahmet Yılmaz",
      position: "Kurucu & CEO",
      image: "/api/placeholder/300/300",
      description: "10+ yıllık web geliştirme deneyimi"
    },
    {
      name: "Elif Demir",
      position: "UI/UX Tasarımcı",
      image: "/api/placeholder/300/300",
      description: "Kullanıcı deneyimi uzmanı"
    },
    {
      name: "Mehmet Kaya",
      position: "Frontend Geliştirici",
      image: "/api/placeholder/300/300",
      description: "React ve Vue.js uzmanı"
    },
    {
      name: "Ayşe Özkan",
      position: "Backend Geliştirici",
      image: "/api/placeholder/300/300",
      description: "Node.js ve Python uzmanı"
    }
  ]

  return (
    <section className="about-team section">
      <div className="container">
        <div className="team-header text-center">
          <h2 className="section-title">Ekibimiz</h2>
          <p className="section-subtitle">
            Projelerinizi hayata geçiren deneyimli ekibimizle tanışın
          </p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <div className="image-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
                <p className="team-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutTeam
