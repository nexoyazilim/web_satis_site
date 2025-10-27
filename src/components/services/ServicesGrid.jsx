import React from 'react'
import ServiceCard from './ServiceCard'

const ServicesGrid = () => {
  const services = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: "Web Tasarımı",
      description: "Modern ve kullanıcı dostu web siteleri tasarlıyoruz. Responsive tasarım ile tüm cihazlarda mükemmel görünüm sağlıyoruz.",
      features: ["Responsive Tasarım", "UI/UX Optimizasyonu", "Modern Görsel Tasarım"]
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16,18 22,12 16,6"/>
          <polyline points="8,6 2,12 8,18"/>
        </svg>
      ),
      title: "Web Geliştirme",
      description: "React, Vue.js ve modern JavaScript teknolojileri ile hızlı ve güvenli web uygulamaları geliştiriyoruz.",
      features: ["Frontend Geliştirme", "Backend API", "Veritabanı Entegrasyonu"]
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "SEO Optimizasyonu",
      description: "Arama motorlarında üst sıralarda yer almanız için SEO optimizasyonu ve içerik stratejileri geliştiriyoruz.",
      features: ["Anahtar Kelime Analizi", "İçerik Optimizasyonu", "Teknik SEO"]
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: "E-ticaret Çözümleri",
      description: "Online satış yapmanız için güvenli ve kullanıcı dostu e-ticaret platformları kuruyoruz.",
      features: ["Ödeme Entegrasyonu", "Envanter Yönetimi", "Sipariş Takibi"]
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "Danışmanlık",
      description: "Dijital dönüşüm sürecinizde size rehberlik ediyoruz. Strateji geliştirme ve proje yönetimi hizmetleri sunuyoruz.",
      features: ["Dijital Strateji", "Proje Yönetimi", "Teknik Danışmanlık"]
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "Bakım ve Destek",
      description: "Web sitenizin sürekli güncel ve güvenli kalması için 7/24 bakım ve teknik destek hizmeti veriyoruz.",
      features: ["7/24 Destek", "Güvenlik Güncellemeleri", "Performans Optimizasyonu"]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
