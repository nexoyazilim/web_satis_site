import apiClient from './client';

export const siteApi = {
  // Yeni site oluştur (satın alma işlemi sonrası)
  createSite: async (siteData) => {
    try {
      const response = await apiClient.post('/sites', siteData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Site oluşturulamadı' };
    }
  },

  // Kullanıcının sitelerini listele (satın aldığı siteler)
  getMySites: async () => {
    try {
      const response = await apiClient.get('/sites/my');
      console.log('Sites API Response:', response.data);
      // Backend'den gelen format: { success, count, sites: [...] }
      return response.data.sites || response.data.data || [];
    } catch (error) {
      console.error('Sites API Error:', error);
      throw error.response?.data || { message: 'Siteler yüklenemedi' };
    }
  },

  // Site detaylarını al (slug ile)
  getSiteBySlug: async (slug) => {
    try {
      const response = await apiClient.get(`/sites/${slug}`);
      return response.data.data;
    } catch (error) {
      throw error.response?.data || { message: 'Site bulunamadı' };
    }
  },

  // Site güncelle (owner/admin)
  updateSite: async (siteId, updateData) => {
    try {
      const response = await apiClient.patch(`/sites/${siteId}`, updateData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Site güncellenemedi' };
    }
  },

  // Site üyelerini listele
  getSiteMembers: async (siteId) => {
    try {
      const response = await apiClient.get(`/sites/${siteId}/members`);
      return response.data.data;
    } catch (error) {
      throw error.response?.data || { message: 'Üyeler yüklenemedi' };
    }
  },

  // Üye ekle (owner/admin)
  addMember: async (siteId, email, role = 'editor') => {
    try {
      const response = await apiClient.post(`/sites/${siteId}/members`, {
        email,
        role
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Üye eklenemedi' };
    }
  },

  // Üye çıkar (owner/admin)
  removeMember: async (siteId, userId) => {
    try {
      const response = await apiClient.delete(`/sites/${siteId}/members/${userId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Üye çıkarılamadı' };
    }
  },

  // Aktif site ID'sini değiştir
  setActiveSite: (siteId) => {
    localStorage.setItem('active_site_id', siteId);
  },

  // Aktif site ID'sini al
  getActiveSiteId: () => {
    return localStorage.getItem('active_site_id');
  }
};

