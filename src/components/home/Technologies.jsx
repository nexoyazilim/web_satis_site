import React from 'react'

const Technologies = () => {
  const technologies = [
    {
      name: "React",
      category: "Frontend Framework",
      icon: <img src={`${import.meta.env.BASE_URL}technologyicons/react.png`} alt="React" className="w-10 h-10" />,
      description: "Modern ve performanslı kullanıcı arayüzleri oluşturmak için React kullanıyoruz. Component-based yapısı sayesinde kod tekrarını önlüyor, hızlı güncelleme ve bakım sağlıyoruz.",
      color: "text-blue-500"
    },
    {
      name: "AWS",
      category: "Cloud Infrastructure",
      icon: <img src={`${import.meta.env.BASE_URL}technologyicons/aws.png`} alt="AWS" className="w-10 h-10" />,
      description: "Amazon Web Services ile yüksek güvenlik standartlarını sağlıyoruz. DDoS koruması, SSL sertifikaları, otomatik yedekleme ve global CDN ile siteniz 7/24 güvende ve hızlı.",
      color: "text-orange-500"
    },
    {
      name: "Three.js",
      category: "3D Animation",
      icon: <img src={`${import.meta.env.BASE_URL}technologyicons/threejs.png`} alt="Three.js" className="w-10 h-10" />,
      description: "Three.js ile 3 boyutlu görselleştirme ve interaktif animasyonlar ekliyoruz. Ürün tanıtımlarında, portfolio gösterimlerinde ve özel efektlerde kullanıyoruz.",
      color: "text-green-500"
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      icon: <img src={`${import.meta.env.BASE_URL}technologyicons/tailwind.png`} alt="Tailwind CSS" className="w-10 h-10" />,
      description: "Utility-first CSS framework olan Tailwind ile hızlı ve responsive tasarımlar üretiyoruz. Önceden tanımlı sınıflar sayesinde geliştirme sürecini hızlandırıyoruz.",
      color: "text-teal-500"
    },
    {
      name: "Node.js",
      category: "Backend Runtime",
      icon: <img src={`${import.meta.env.BASE_URL}technologyicons/nodejs.png`} alt="Node.js" className="w-10 h-10" />,
      description: "Node.js ile sunucu tarafında hızlı ve ölçeklenebilir uygulamalar geliştiriyoruz. Non-blocking I/O yapısı sayesinde yüksek performans ve eş zamanlı işlem desteği sağlıyoruz.",
      color: "text-green-600"
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: <img src={`${import.meta.env.BASE_URL}technologyicons/mongodb.png`} alt="MongoDB" className="w-10 h-10" />,
      description: "NoSQL database olan MongoDB ile büyük veri hacimlerini verimli şekilde yönetiyoruz. Esnek şema yapısı ile hızlı geliştirme ve ölçeklenebilir mimariler oluşturuyoruz.",
      color: "text-green-700"
    },
    {
      name: "Vite",
      category: "Build Tool",
      icon: <img src={`${import.meta.env.BASE_URL}technologyicons/vite.png`} alt="Vite" className="w-10 h-10" />,
      description: "Vite ile ultra hızlı geliştirme deneyimi sunuyoruz. Hot Module Replacement (HMR) sayesinde değişiklikler anında görüntülenir ve production build'lerde optimize edilmiş performans elde edilir.",
      color: "text-purple-500"
    },
    {
      name: "TypeScript",
      category: "Type Safety",
      icon: <img src={`${import.meta.env.BASE_URL}technologyicons/typescript.png`} alt="TypeScript" className="w-10 h-10" />,
      description: "TypeScript ile tip güvenliği sağlıyor ve runtime hatalarını önlüyoruz. IDE desteği ile daha hızlı geliştirme ve bakım yapıyor, büyük projelerde kod kalitesini artırıyoruz.",
      color: "text-blue-600"
    },
    {
      name: "Google Cloud",
      category: "Cloud Platform",
      icon: <img src={`${import.meta.env.BASE_URL}technologyicons/googlecloud.png`} alt="Google Cloud" className="w-10 h-10" />,
      description: "Google Cloud Platform ile ölçeklenebilir ve güvenli altyapı sağlıyoruz. AI/ML entegrasyonları, BigQuery analitik, ve Firebase ile tam kapsamlı cloud çözümleri sunuyoruz.",
      color: "text-blue-500"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Kullandığımız Teknolojiler</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern web teknolojileriyle donatılmış projelerimiz, performans ve güvenlik standartlarını en üst seviyede tutuyor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 group"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-500">{tech.category}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {tech.description}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {tech.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
