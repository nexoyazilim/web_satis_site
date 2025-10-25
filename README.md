# 🌐 Web Satış Sitesi

Modern ve profesyonel web ajansı sitesi. Müşterilerin demo siteleri inceleyip satın alabileceği, backend API entegrasyonlu tam özellikli bir platform.

## ✨ Özellikler

- 🎨 Modern ve responsive tasarım
- 🔐 Backend API entegrasyonu (Authentication, Panel)
- 👥 Müşteri kayıt ve giriş sistemi
- 📊 Müşteri paneli (Satın alınan siteleri yönetme)
- 🛡️ Protected routes (Güvenli sayfa erişimi)
- 📱 Tam responsive (Desktop, Tablet, Mobile)
- 🚀 GitHub Pages ile otomatik deployment

## 🛠️ Teknolojiler

- **Frontend:** React 19 + Vite
- **Styling:** Custom CSS
- **Routing:** React Router v7
- **HTTP Client:** Axios
- **3D Graphics:** Three.js + React Three Fiber
- **Deployment:** GitHub Pages (Actions ile otomatik)

## 📦 Kurulum

### 1. Projeyi Klonla

\`\`\`bash
git clone https://github.com/nexoyazilim/web_satis_site.git
cd web_satis_site
\`\`\`

### 2. Bağımlılıkları Yükle

\`\`\`bash
npm install
\`\`\`

### 3. Environment Variables Ayarla

\`.env\` dosyası oluştur (kök dizinde):

\`\`\`bash
cp .env.example .env
\`\`\`

Sonra \`.env\` dosyasını düzenle ve kendi backend API URL'ini ekle:

\`\`\`env
VITE_API_URL=https://your-backend-api-url.com
VITE_API_TIMEOUT=10000
\`\`\`

> ⚠️ **Önemli:** \`.env\` dosyası Git'e commitlenmez. Kendi backend API URL'inizi kullanın.

### 4. Development Server'ı Başlat

\`\`\`bash
npm run dev
\`\`\`

Tarayıcıda açılacak: \`http://localhost:5173\`

## 🏗️ Build

Production build oluşturmak için:

\`\`\`bash
npm run build
\`\`\`

Build dosyaları \`dist/\` klasöründe oluşur.

## 📂 Proje Yapısı

\`\`\`
web_satis_site/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── public/                     # Static dosyalar
├── src/
│   ├── api/                    # Backend API client'ları
│   │   ├── client.js          # Axios base client
│   │   ├── auth.js            # Authentication API
│   │   └── sites.js           # Sites API
│   ├── components/            # React bileşenleri
│   │   ├── about/
│   │   ├── contact/
│   │   ├── home/
│   │   ├── services/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ProtectedRoute.jsx # Route koruma
│   ├── css/                   # Stil dosyaları
│   ├── pages/                 # Sayfa bileşenleri
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   ├── Login.jsx          # Backend'e bağlı
│   │   ├── Register.jsx       # Backend'e bağlı
│   │   └── Panel.jsx          # Müşteri paneli
│   ├── main.jsx               # Ana React bileşeni
│   └── index.css
├── .env.example               # Environment variables template
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
\`\`\`

## 🔐 Güvenlik

### Environment Variables

Hassas bilgiler (API URL, token'lar) \`.env\` dosyasında saklanır ve Git'e commitlenmez.

### API Authentication

- JWT token ile authentication
- Token localStorage'da saklanır
- Her API isteğinde otomatik eklenir (Axios interceptor)
- Token geçersizse otomatik login sayfasına yönlendirme

### Protected Routes

\`/panel\` gibi özel sayfalar \`ProtectedRoute\` komponenti ile korunur. Login olmadan erişim denenirse \`/login\`'e yönlendirilir.

## 🚀 Deployment

### GitHub Pages (Otomatik)

\`main\` branch'e push yapıldığında otomatik olarak GitHub Pages'e deploy edilir.

**Canlı URL:** \`https://nexoyazilim.github.io/web_satis_site/\`

### Manuel Deployment

\`\`\`bash
npm run build
# dist/ klasörünü hosting servisine yükle
\`\`\`

## 📄 Backend API

Backend API entegrasyonu için:
- \`VITE_API_URL\` environment variable'ı gerekli
- Backend dökümantasyonu: \`FRONTEND_SETUP.md\`

### API Endpoints

- \`POST /api/auth/register\` - Kayıt
- \`POST /api/auth/login\` - Giriş
- \`POST /api/auth/logout\` - Çıkış
- \`GET /api/auth/profile\` - Profil
- \`GET /api/sites/my\` - Kullanıcının siteleri
- \`POST /api/sites\` - Yeni site oluştur

## 🎯 Kullanım Senaryosu

1. **Yeni Müşteri:**
   - Ana sitede demo siteleri inceler
   - Beğendiği siteyi seçer
   - Kayıt olur (\`/register\`)
   - Otomatik paneline yönlendirilir
   - Satın aldığı siteleri görür

2. **Mevcut Müşteri:**
   - Giriş yapar (\`/login\`)
   - Panelinde tüm sitelerini görür (\`/panel\`)
   - İstediği sitenin admin paneline erişir

## 🤝 Katkıda Bulunma

1. Fork'layın
2. Feature branch oluşturun (\`git checkout -b feature/amazing-feature\`)
3. Commit'leyin (\`git commit -m 'feat: Add amazing feature'\`)
4. Branch'inizi push'layın (\`git push origin feature/amazing-feature\`)
5. Pull Request açın

## 📝 Lisans

Bu proje özel bir projedir ve ticari kullanım için izin gereklidir.

## 📞 İletişim

- **Website:** [nexoyazilim.com](https://nexoyazilim.com)
- **GitHub:** [@nexoyazilim](https://github.com/nexoyazilim)

---

**Made with ❤️ by NexoYazilim**
