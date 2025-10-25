import React from 'react'

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ekibimiz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projelerinizi hayata geçiren deneyimli ekibimizle tanışın
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="mb-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-500">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-gray-800 font-medium mb-2">{member.position}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutTeam
