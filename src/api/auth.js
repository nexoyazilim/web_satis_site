import apiClient from './client';

export const authApi = {
  // Kayıt ol
  register: async (email, password, fullName) => {
    try {
      const response = await apiClient.post('/api/auth/register', {
        email,
        password,
        fullName
      });

      // Token'ı kaydet
      const { token, user, sites } = response.data.data;
      localStorage.setItem('jwt_token', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      // Kullanıcının ilk sitesini aktif yap (varsa)
      if (sites && sites.length > 0) {
        localStorage.setItem('active_site_id', sites[0].site_id);
      }

      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Kayıt başarısız' };
    }
  },

  // Giriş yap
  login: async (email, password) => {
    try {
      const response = await apiClient.post('/api/auth/login', {
        email,
        password
      });

      // Token'ı kaydet
      const { token, user, sites } = response.data.data;
      localStorage.setItem('jwt_token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Kullanıcının ilk sitesini aktif yap (varsa)
      if (sites && sites.length > 0) {
        localStorage.setItem('active_site_id', sites[0].site_id);
      }

      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Giriş başarısız' };
    }
  },

  // Çıkış yap
  logout: async () => {
    try {
      await apiClient.post('/api/auth/logout');
    } catch (error) {
      console.error('Logout hatası:', error);
    } finally {
      // Token'ı temizle
      localStorage.removeItem('jwt_token');
      localStorage.removeItem('user');
      localStorage.removeItem('active_site_id');
      window.location.href = '/login';
    }
  },

  // Profil bilgilerini al
  getProfile: async () => {
    try {
      const response = await apiClient.get('/api/auth/profile');
      return response.data.data;
    } catch (error) {
      throw error.response?.data || { message: 'Profil alınamadı' };
    }
  },

  // Login durumunu kontrol et
  isAuthenticated: () => {
    const token = localStorage.getItem('jwt_token');
    return !!token;
  },

  // Kullanıcı bilgilerini al (localStorage'dan)
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }
};

