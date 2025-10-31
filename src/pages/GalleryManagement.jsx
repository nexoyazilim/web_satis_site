import React, { useState, useEffect } from 'react';
import galleryService from '../api/gallery';
import '/src/css/GalleryManagement.css';

const GalleryManagement = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingImage, setEditingImage] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [dragStartIndex, setDragStartIndex] = useState(null);

  // Site ID'yi localStorage'dan al
  const siteId = localStorage.getItem('active_site_id') || '5';

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await galleryService.getGallery(siteId);
      // API sözleşmesi: { success, data: [...] }
      setImages(response?.data || []);
    } catch (error) {
      console.warn('API hatası, statik veriler kullanılıyor:', error);
      
      // Fallback: Statik veriler
      const fallbackImages = galleryService.getFallbackImages();
      setImages(fallbackImages);
      setError('API bağlantısı kurulamadı, statik veriler gösteriliyor.');
    } finally {
      setLoading(false);
    }
  };

  const addImage = async (imageData) => {
    try {
      setLoading(true);
      setError(null);
      
      await galleryService.addImage(siteId, imageData);
      setSuccess('Resim başarıyla eklendi!');
      fetchImages();
      setShowForm(false);
    } catch (error) {
      setError('Resim eklenemedi: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateImage = async (imageId, imageData) => {
    try {
      setLoading(true);
      setError(null);
      
      await galleryService.updateImage(siteId, imageId, imageData);
      setSuccess('Resim başarıyla güncellendi!');
      fetchImages();
      setEditingImage(null);
    } catch (error) {
      setError('Resim güncellenemedi: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteImage = async (imageId) => {
    if (!confirm('Bu resmi silmek istediğinizden emin misiniz?')) return;
    
    try {
      setLoading(true);
      setError(null);
      
      await galleryService.deleteImage(siteId, imageId);
      setSuccess('Resim başarıyla silindi!');
      fetchImages();
    } catch (error) {
      setError('Resim silinemedi: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const reorderImages = async (newOrder) => {
    try {
      setLoading(true);
      setError(null);
      
      const reorderData = newOrder.map((image, index) => ({
        id: image.id,
        order_index: index
      }));
      
      await galleryService.reorderImages(siteId, reorderData);
      setImages(newOrder);
      setSuccess('Sıralama güncellendi!');
    } catch (error) {
      setError('Sıralama güncellenemedi: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDragStart = (e, index) => {
    setDragStartIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    
    if (dragStartIndex === null || dragStartIndex === dropIndex) return;
    
    const newImages = [...images];
    const draggedImage = newImages[dragStartIndex];
    
    // Sürüklenen öğeyi kaldır
    newImages.splice(dragStartIndex, 1);
    
    // Yeni pozisyona ekle
    newImages.splice(dropIndex, 0, draggedImage);
    
    setImages(newImages);
    reorderImages(newImages);
    setDragStartIndex(null);
  };

  const togglePublished = async (image) => {
    try {
      setLoading(true);
      setError(null);
      
      await updateImage(image.id, {
        ...image,
        is_published: !image.is_published
      });
    } catch (error) {
      setError('Durum güncellenemedi: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gallery-management">
      <div className="gallery-header">
        <h2>Galeri Yönetimi</h2>
        <p>Veteriner siteniz için galeri resimlerini yönetin</p>
        
        <button 
          className="btn btn-primary"
          onClick={() => setShowForm(true)}
          disabled={loading}
        >
          Yeni Resim Ekle
        </button>
      </div>

      {/* Mesajlar */}
      {error && (
        <div className="alert alert-error">
          {error}
        </div>
      )}
      
      {success && (
        <div className="alert alert-success">
          {success}
          <button onClick={() => setSuccess(null)}>×</button>
        </div>
      )}

      {/* Galeri Listesi */}
      <div className="gallery-grid">
        {loading ? (
          <div className="loading">Yükleniyor...</div>
        ) : images.length === 0 ? (
          <div className="no-images">
            <p>Henüz galeri resminiz yok. İlk resminizi ekleyin!</p>
          </div>
        ) : (
          images.map((image, index) => (
            <div 
              key={image.id} 
              className={`gallery-item ${!image.is_published ? 'unpublished' : ''}`}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
            >
              <div className="gallery-item-image">
                <img 
                  src={(function() {
                    const direct = image.image_url || image.image;
                    if (direct) return direct;
                    if (image.url) {
                      const base = import.meta.env.DEV
                        ? 'http://localhost:3000'
                        : (import.meta.env.VITE_API_URL ? String(import.meta.env.VITE_API_URL).replace(/\/?api\/?$/, '') : '');
                      return base + image.url;
                    }
                    return '';
                  })()} 
                  alt={image.alt_text}
                  onError={(e) => {
                    e.target.src = '/hero.jpg'; // Fallback image
                  }}
                />
                <div className="gallery-item-overlay">
                  <div className="gallery-item-actions">
                    <button 
                      className="btn btn-sm btn-secondary"
                      onClick={() => setEditingImage(image)}
                      disabled={loading}
                    >
                      Düzenle
                    </button>
                    <button 
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteImage(image.id)}
                      disabled={loading}
                    >
                      Sil
                    </button>
                    <button 
                      className={`btn btn-sm ${image.is_published ? 'btn-warning' : 'btn-success'}`}
                      onClick={() => togglePublished(image)}
                      disabled={loading}
                    >
                      {image.is_published ? 'Yayından Kaldır' : 'Yayınla'}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="gallery-item-info">
                <h4>{image.title}</h4>
                <p className="gallery-item-description">{image.description}</p>
                <div className="gallery-item-meta">
                  <span className={`status ${image.is_published ? 'published' : 'draft'}`}>
                    {image.is_published ? 'Yayında' : 'Taslak'}
                  </span>
                  <span className="order-index">Sıra: {image.order_index}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Resim Ekleme/Düzenleme Formu */}
      {(showForm || editingImage) && (
        <GalleryImageForm
          image={editingImage}
          onSubmit={editingImage ? updateImage : addImage}
          onCancel={() => {
            setShowForm(false);
            setEditingImage(null);
          }}
          loading={loading}
        />
      )}
    </div>
  );
};

// Galeri Resim Formu Komponenti
const GalleryImageForm = ({ image, onSubmit, onCancel, loading }) => {
  const [formData, setFormData] = useState({
    title: image?.title || '',
    alt_text: image?.alt_text || '',
    description: image?.description || '',
    order_index: image?.order_index || 0,
    is_published: image?.is_published ?? true,
    image: null
  });

  const [preview, setPreview] = useState(image?.image_url || image?.image || null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Debug: image'ın gerçekten File/Blob olup olmadığını doğrula
    // Not: Bu logları sorun çözüldükten sonra kaldırabilirsiniz
    console.log('is File?', formData.image instanceof File, formData.image);
    try {
      const fd = new FormData();
      fd.append('image', formData.image);
      console.log('fd image ->', fd.get('image'), fd.get('image') instanceof File);
    } catch (err) {
      console.log('FormData test error:', err);
    }
    // Yeni kayıt: sadece formData gönder
    // Düzenleme: id + formData gönder
    if (image?.id) {
      onSubmit(image.id, formData);
    } else {
      onSubmit(formData);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // Debug: seçilen dosyanın File olup olmadığını logla
    console.log('selected file:', file, file instanceof File);
    if (file) {
      setFormData({
        ...formData,
        image: file
      });
      
      // Preview oluştur
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="gallery-form-modal">
      <div className="modal-content">
        <h3>{image ? 'Resmi Düzenle' : 'Yeni Resim Ekle'}</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Resim *</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required={!image}
              disabled={loading}
            />
            {preview && (
              <div className="image-preview">
                <img src={preview} alt="Önizleme" />
              </div>
            )}
          </div>
          
          <div className="form-group">
            <label>Başlık *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
              disabled={loading}
            />
          </div>
          
          <div className="form-group">
            <label>Alt Metin</label>
            <input
              type="text"
              value={formData.alt_text}
              onChange={(e) => setFormData({...formData, alt_text: e.target.value})}
              disabled={loading}
            />
          </div>
          
          <div className="form-group">
            <label>Açıklama</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows="3"
              disabled={loading}
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Sıra</label>
              <input
                type="number"
                value={formData.order_index}
                onChange={(e) => setFormData({...formData, order_index: parseInt(e.target.value) || 0})}
                disabled={loading}
                min="0"
              />
            </div>
            
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={formData.is_published}
                  onChange={(e) => setFormData({...formData, is_published: e.target.checked})}
                  disabled={loading}
                />
                Yayınla
              </label>
            </div>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Kaydediliyor...' : (image ? 'Güncelle' : 'Ekle')}
            </button>
            <button type="button" onClick={onCancel} className="btn btn-secondary" disabled={loading}>
              İptal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GalleryManagement;
