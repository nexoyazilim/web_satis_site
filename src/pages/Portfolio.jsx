import React from 'react'
import PortfolioHero from '../components/portfolio/PortfolioHero'
import DemoCard from '../components/portfolio/DemoCard'

const Portfolio = () => {
  const demoWebsites = [
    {
      id: 1,
      title: "E-Ticaret Sitesi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Modern e-ticaret platformu",
      tags: ['E-Ticaret', 'Ürün', 'Ödeme']
    },
    {
      id: 2,
      title: "Kurumsal Web Sitesi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Profesyonel kurumsal tasarım",
      tags: ['Kurumsal', 'Hakkımızda', 'Hizmetler']
    },
    {
      id: 3,
      title: "Restoran Sitesi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Lezzetli menüler ve rezervasyon",
      tags: ['Menü', 'Rezervasyon']
    },
    {
      id: 4,
      title: "Blog Sitesi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Kişisel blog ve içerik yönetimi",
      tags: ['Blog', 'Yayın']
    },
    {
      id: 5,
      title: "Portfolyo Sitesi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Yaratıcı portfolyo gösterimi",
      tags: ['Galeri', 'Proje']
    },
    {
      id: 6,
      title: "Spa & Wellness",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Rahatlatıcı spa deneyimi",
      tags: ['Randevu', 'Hizmet']
    },
    {
      id: 7,
      title: "Emlak Sitesi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Emlak ilanları ve arama",
      tags: ['İlan', 'Harita']
    },
    {
      id: 8,
      title: "Eğitim Platformu",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Online eğitim ve kurslar",
      tags: ['Kurs', 'Öğrenci']
    },
    {
      id: 9,
      title: "Seyahat Sitesi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Seyahat rehberi ve rezervasyon",
      tags: ['Tur', 'Rezervasyon']
    },
    {
      id: 10,
      title: "Teknoloji Blogu",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Teknoloji haberleri ve analiz",
      tags: ['Teknoloji', 'İnceleme']
    },
    {
      id: 11,
      title: "Fitness Merkezi",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Spor salonu ve fitness programları",
      tags: ['Antrenman', 'Üyelik']
    },
    {
      id: 12,
      title: "Moda Mağazası",
      image: `${import.meta.env.BASE_URL}otelmockup.png`,
      description: "Trend moda ve stil önerileri",
      tags: ['Ürün', 'Lookbook']
    }
  ]

  return (
    <div>
      <PortfolioHero />

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Tüm Demolar</h2>
            <p className="text-gray-600 mt-1">İhtiyacınıza uygun tasarımı seçin</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoWebsites.map((website) => (
              <DemoCard
                key={website.id}
                title={website.title}
                image={website.image}
                description={website.description}
                tags={website.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
