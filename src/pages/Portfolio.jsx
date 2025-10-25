import React from 'react'
import '/src/css/Portfolio.css'

const Portfolio = () => {
  const demoWebsites = [
    {
      id: 1,
      title: "E-Ticaret Sitesi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Modern e-ticaret platformu"
    },
    {
      id: 2,
      title: "Kurumsal Web Sitesi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Profesyonel kurumsal tasarım"
    },
    {
      id: 3,
      title: "Restoran Sitesi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Lezzetli menüler ve rezervasyon"
    },
    {
      id: 4,
      title: "Blog Sitesi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Kişisel blog ve içerik yönetimi"
    },
    {
      id: 5,
      title: "Portfolyo Sitesi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Yaratıcı portfolyo gösterimi"
    },
    {
      id: 6,
      title: "Spa & Wellness",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Rahatlatıcı spa deneyimi"
    },
    {
      id: 7,
      title: "Emlak Sitesi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Emlak ilanları ve arama"
    },
    {
      id: 8,
      title: "Eğitim Platformu",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Online eğitim ve kurslar"
    },
    {
      id: 9,
      title: "Seyahat Sitesi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Seyahat rehberi ve rezervasyon"
    },
    {
      id: 10,
      title: "Teknoloji Blogu",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Teknoloji haberleri ve analiz"
    },
    {
      id: 11,
      title: "Fitness Merkezi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Spor salonu ve fitness programları"
    },
    {
      id: 12,
      title: "Moda Mağazası",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Trend moda ve stil önerileri"
    }
  ]

  return (
    <div className="portfolio-page">
      <div className="container">
        <div className="section-lg">
          <div className="text-center">
            <h1>Demo Siteler</h1>
            <p>Farklı sektörlerden örnek web sitelerimizi inceleyin</p>
          </div>
          
          <div className="demo-grid">
            {demoWebsites.map((website) => (
              <div key={website.id} className="demo-card">
                <div className="demo-card-image">
                  {website.image ? (
                    <img src={website.image} alt={website.title} />
                  ) : (
                    <div className="demo-card-placeholder"></div>
                  )}
                  <div className="demo-card-overlay">
                    <div className="demo-card-content">
                      <h3>{website.title}</h3>
                      <p>{website.description}</p>
                      <div className="demo-card-buttons">
                        <button className="btn btn-primary">Paketleri İncele</button>
                        <button className="btn btn-secondary">Demoyu İncele</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
