import React, { useState, useEffect } from 'react'
import { authApi } from '../api/auth'
import { siteApi } from '../api/sites'
import '/src/css/Panel.css'

const Panel = () => {
  const [user, setUser] = useState(null)
  const [sites, setSites] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    // Login kontrolü
    if (!authApi.isAuthenticated()) {
      window.location.href = '/login'
      return
    }

    loadUserData()
  }, [])

  const loadUserData = async () => {
    try {
      setLoading(true)
      
      // Kullanıcı bilgilerini al
      const userData = authApi.getCurrentUser()
      setUser(userData)

      // Kullanıcının sitelerini getir
      try {
        const userSites = await siteApi.getMySites()
        setSites(Array.isArray(userSites) ? userSites : [])
      } catch (siteError) {
        // Site API'si hata verirse boş array kullan (yeni kullanıcı olabilir)
        console.warn('Siteler yüklenemedi (muhtemelen yeni kullanıcı):', siteError)
        setSites([])
      }
    } catch (err) {
      setError('Veriler yüklenirken bir hata oluştu')
      console.error('Panel yükleme hatası:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    if (window.confirm('Çıkış yapmak istediğinizden emin misiniz?')) {
      await authApi.logout()
    }
  }

  const handleSiteAccess = (siteId, siteTitle) => {
    // Aktif site'yi değiştir
    siteApi.setActiveSite(siteId)
    alert(`${siteTitle} admin paneline erişiliyor...`)
    // Burada gerçek admin panel sayfasına yönlendirebilirsiniz
    // window.location.href = `/admin/${siteId}`
  }

  if (loading) {
    return (
      <div className="panel-page">
        <div className="panel-loading">
          <div className="spinner"></div>
          <p>Yükleniyor...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="panel-page">
      <div className="panel-container">
        {/* Header */}
        <div className="panel-header">
          <div className="panel-header-content">
            <div className="panel-header-left">
              <h1>Hoş Geldiniz, {user?.fullName || 'Kullanıcı'}</h1>
              <p className="panel-subtitle">Satın aldığınız siteleri yönetin</p>
            </div>
            <div className="panel-header-right">
              <button onClick={handleLogout} className="btn-logout">
                Çıkış Yap
              </button>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="error-banner">
            {error}
          </div>
        )}

        {/* Sites Grid */}
        <div className="panel-content">
          {sites.length === 0 ? (
            <div className="no-sites">
              <div className="no-sites-icon">🌐</div>
              <h2>Henüz Siteniz Yok</h2>
              <p>Demo sitelerimizi inceleyip satın alarak başlayabilirsiniz</p>
              <a href="/portfolio" className="btn-primary-large">
                Demo Siteleri İncele
              </a>
            </div>
          ) : (
            <div className="sites-grid">
              {sites.map((site) => (
                <div key={site.site_id} className="site-card">
                  <div className="site-card-header">
                    <div className="site-icon">
                      {site.title?.[0] || 'S'}
                    </div>
                    <div className="site-info">
                      <h3 className="site-title">{site.title}</h3>
                      <p className="site-slug">{site.custom_domain || `${site.slug}.nexoyazilim.com`}</p>
                    </div>
                  </div>

                  <div className="site-card-body">
                    <div className="site-meta">
                      <div className="meta-item">
                        <span className="meta-label">Durum:</span>
                        <span className={`status-badge status-${site.status}`}>
                          {site.status === 'active' ? 'Aktif' : 
                           site.status === 'pending' ? 'Beklemede' : 'Pasif'}
                        </span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Rol:</span>
                        <span className="role-badge">
                          {site.role === 'owner' ? 'Sahip' : 
                           site.role === 'admin' ? 'Admin' : 'Editör'}
                        </span>
                      </div>
                    </div>

                    {site.description && (
                      <p className="site-description">{site.description}</p>
                    )}
                  </div>

                  <div className="site-card-footer">
                    <button 
                      onClick={() => handleSiteAccess(site.site_id, site.title)}
                      className="btn-access"
                    >
                      Admin Paneline Git
                    </button>
                    <a 
                      href={site.custom_domain ? `https://${site.custom_domain}` : `https://${site.slug}.nexoyazilim.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-view"
                    >
                      Siteyi Görüntüle
                    </a>
                  </div>

                  <div className="site-card-date">
                    Oluşturulma: {new Date(site.created_at).toLocaleDateString('tr-TR')}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats Section */}
        {sites.length > 0 && (
          <div className="panel-stats">
            <div className="stat-card">
              <div className="stat-value">{sites.length}</div>
              <div className="stat-label">Toplam Site</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">
                {sites.filter(s => s.status === 'active').length}
              </div>
              <div className="stat-label">Aktif Site</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">
                {sites.filter(s => s.role === 'owner').length}
              </div>
              <div className="stat-label">Sahip Olduğunuz</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Panel

