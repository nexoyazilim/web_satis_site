import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogManagement from './BlogManagement';
import GalleryManagement from './GalleryManagement';
import '/src/css/BlogManagement.css';
import '/src/css/AdminPanel.css';

const AdminPanel = () => {
  const { siteId } = useParams();
  const [siteInfo, setSiteInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('blog');

  useEffect(() => {
    loadSiteInfo();
  }, [siteId]);

  useEffect(() => {
    // Site ID'yi localStorage'a kaydet
    if (siteId) {
      localStorage.setItem('active_site_id', siteId);
    }
  }, [siteId]);

  const loadSiteInfo = async () => {
    try {
      setLoading(true);
      
      // Site bilgilerini localStorage'dan al
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const sites = JSON.parse(localStorage.getItem('sites') || '[]');
      
      // Site ID'ye göre site bilgisini bul
      const site = sites.find(s => s.site_id === siteId);
      
      if (site) {
        setSiteInfo(site);
      } else {
        // Fallback: Site bilgisi yoksa varsayılan bilgi
        setSiteInfo({
          site_id: siteId,
          title: 'Demo Veteriner',
          slug: 'demo-veteriner',
          custom_domain: 'nexoyazilim.github.io/veteriner_web'
        });
      }
    } catch (error) {
      console.error('Site bilgisi yüklenemedi:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBackToPanel = () => {
    window.location.href = '/panel';
  };

  if (loading) {
    return (
      <div className="admin-panel-page">
        <div className="admin-loading">
          <div className="spinner"></div>
          <p>Admin panel yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-panel-page">
      <div className="admin-container">
        {/* Admin Header */}
        <div className="admin-header">
          <div className="admin-header-content">
            <div className="admin-header-left">
              <button onClick={handleBackToPanel} className="btn-back">
                ← Panel'e Dön
              </button>
              <div className="admin-title">
                <h1>{siteInfo?.title || 'Admin Panel'}</h1>
                <p className="admin-subtitle">
                  {siteInfo?.custom_domain || `${siteInfo?.slug}.nexoyazilim.com`}
                </p>
              </div>
            </div>
            <div className="admin-header-right">
              <a 
                href={siteInfo?.custom_domain ? `https://${siteInfo.custom_domain}` : `https://${siteInfo?.slug}.nexoyazilim.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-view-site"
              >
                Siteyi Görüntüle
              </a>
            </div>
          </div>
        </div>

        {/* Admin Navigation */}
        <div className="admin-nav">
          <div className="admin-nav-tabs">
            <button 
              className={`admin-tab ${activeTab === 'blog' ? 'active' : ''}`}
              onClick={() => setActiveTab('blog')}
            >
              Blog Yönetimi
            </button>
            <button 
              className={`admin-tab ${activeTab === 'gallery' ? 'active' : ''}`}
              onClick={() => setActiveTab('gallery')}
            >
              Galeri Yönetimi
            </button>
            <button className="admin-tab disabled">
              Site Ayarları (Yakında)
            </button>
            <button className="admin-tab disabled">
              İçerik Yönetimi (Yakında)
            </button>
          </div>
        </div>

        {/* Admin Content */}
        <div className="admin-content">
          {activeTab === 'blog' && <BlogManagement />}
          {activeTab === 'gallery' && <GalleryManagement />}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
