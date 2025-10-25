import React from 'react'
import '/src/css/DemoSlider.css'

const DemoSlider = () => {
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
    <section className="demo-slider-section">
      <div className="demo-container">
        <div className="demo-slider-header">
          <h2>Demo Sitelerimiz</h2>
          <p>Farklı sektörlerden örnek web sitelerimizi keşfedin</p>
        </div>

          
        <div className="demo-slider-container">
          <div className='left-opacity'></div>  
          <div className="demo-slider-track">
            {/* İlk set */}
            {demoWebsites.map((website) => (
              <div key={website.id} className="demo-slider-card">
                <div className="demo-slider-image">
                  {website.image ? (
                    <img src={website.image} alt={website.title} />
                  ) : (
                    <div className="demo-slider-placeholder"></div>
                  )}
                  <div className="demo-slider-overlay">
                    <div className="demo-slider-content">
                      <h3>{website.title}</h3>
                      <p>{website.description}</p>
                      <div className="demo-slider-buttons">
                        <button className="btn btn-primary">Paketleri İncele</button>
                        <button className="btn btn-secondary">Demoyu İncele</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* İkinci set (sürekli kayma için) */}
            {demoWebsites.map((website) => (
              <div key={`duplicate-${website.id}`} className="demo-slider-card">
                <div className="demo-slider-image">
                  {website.image ? (
                    <img src={website.image} alt={website.title} />
                  ) : (
                    <div className="demo-slider-placeholder"></div>
                  )}
                  <div className="demo-slider-overlay">
                    <div className="demo-slider-content">
                      <h3>{website.title}</h3>
                      <p>{website.description}</p>
                      <div className="demo-slider-buttons">
                        <button className="btn btn-primary">Paketleri İncele</button>
                        <button className="btn btn-secondary">Demoyu İncele</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='right-opacity'></div>
        </div>
        
        </div>
        
      
    </section>
  )
}

export default DemoSlider
