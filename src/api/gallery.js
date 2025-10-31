import client from './client';
import { SITE_ID } from '../config/appConfig';

// Blog servisindeki yapıyı yansıt: sabit SITE_ID config üzerinden

const galleryService = {
  // Galeri listesini getir
  async getGallery(siteId, params = {}) {
    try {
      const queryParams = new URLSearchParams({
        published: params.published || 'true',
        limit: params.limit || '50',
        offset: params.offset || '0',
        ...params
      });

      const response = await client.get(`/domain/gallery?${queryParams}`, {
        headers: {
          'x-site-id': SITE_ID
        }
      });
      return response.data;
    } catch (error) {
      console.error('Galeri listesi alınamadı:', error);
      throw error;
    }
  },

  // Galeriye resim ekle
  async addImage(siteId, imageData) {
    try {
      // Dosya tipi doğrulama (File/Blob olmalı)
      if (!imageData?.image || !(imageData.image instanceof File || imageData.image instanceof Blob)) {
        throw new Error('imageData.image bir File/Blob olmalı');
      }

      const formData = new FormData();
      formData.append('image', imageData.image);
      formData.append('title', imageData.title);
      formData.append('alt_text', imageData.alt_text || '');
      formData.append('description', imageData.description || '');
      formData.append('order_index', imageData.order_index || '0');
      formData.append('is_published', imageData.is_published ? 'true' : 'false');

      // Authorization ve x-site-id header'ları interceptor tarafından eklenir
      // Content-Type manuel AYARLANMAZ; axios FormData için boundary ile otomatik belirler
      const response = await client.post('/domain/gallery', formData, {
        headers: {
          'x-site-id': SITE_ID
        }
      });
      return response.data;
    } catch (error) {
      console.error('Resim eklenemedi:', error);
      if (error.response) {
        console.error('Gallery addImage error status:', error.response.status);
        console.error('Gallery addImage error data:', error.response.data);
      }
      throw error;
    }
  },

  // Galeri kaydını güncelle
  async updateImage(siteId, imageId, imageData) {
    try {
      const response = await client.patch(`/domain/gallery/${imageId}`, imageData, {
        headers: {
          'x-site-id': SITE_ID,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Resim güncellenemedi:', error);
      throw error;
    }
  },

  // Galeri kaydını sil
  async deleteImage(siteId, imageId) {
    try {
      const response = await client.delete(`/domain/gallery/${imageId}`, {
        headers: {
          'x-site-id': SITE_ID
        }
      });
      return response.data;
    } catch (error) {
      console.error('Resim silinemedi:', error);
      throw error;
    }
  },

  // Galeri sıralamasını güncelle
  async reorderImages(siteId, reorderData) {
    try {
      const response = await client.patch('/domain/gallery/reorder', reorderData, {
        headers: {
          'x-site-id': SITE_ID,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Sıralama güncellenemedi:', error);
      throw error;
    }
  },

  // Fallback veriler (API çalışmadığında)
  getFallbackImages() {
    return [
      {
        id: 'fallback-1',
        title: 'Veteriner Kliniği',
        alt_text: 'Modern veteriner kliniği iç mekanı',
        description: 'Hasta hayvanlar için konforlu muayene odası',
        image_url: '/hero.jpg',
        order_index: 0,
        is_published: true,
        created_at: new Date().toISOString()
      },
      {
        id: 'fallback-2',
        title: 'Ameliyathane',
        alt_text: 'Steril ameliyathane ortamı',
        description: 'Modern ekipmanlarla donatılmış ameliyathane',
        image_url: '/hero.PNG',
        order_index: 1,
        is_published: true,
        created_at: new Date().toISOString()
      },
      {
        id: 'fallback-3',
        title: 'Bekleme Salonu',
        alt_text: 'Rahat bekleme salonu',
        description: 'Hasta sahipleri için konforlu bekleme alanı',
        image_url: '/otelmockup.png',
        order_index: 2,
        is_published: true,
        created_at: new Date().toISOString()
      }
    ];
  }
};

export default galleryService;
