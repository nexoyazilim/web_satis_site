import apiClient from './client';

export const authApi = {
  // Kayıt ol
  register: async (email, password, fullName) => {
    try {
      console.log('Register isteği gönderiliyor:', { email, fullName });
      const response = await apiClient.post('/api/auth/register', {
        email,
        password,
        fullName
      });

      console.log('Register yanıtı:', response.data);
      
      // Token'ı kaydet
      const { token, user, sites } = response.data.data || response.data;
      
      if (token) {
        localStorage.setItem('jwt_token', token);
      }
      
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      }
      
      // Kullanıcının ilk sitesini aktif yap (varsa)
      if (sites && Array.isArray(sites) && sites.length > 0) {
        localStorage.setItem('active_site_id', sites[0].site_id);
      } else {
        // Site yoksa active_site_id'yi temizle
        localStorage.removeItem('active_site_id');
      }

      return response.data;
    } catch (error) {
      console.error('Auth API Register Hatası:', {
        message: error.message,
        response: error.response,
        status: error.response?.status,
        data: error.response?.data,
        request: error.request
      });
      throw error.response?.data || { message: error.message || 'Kayıt başarısız' };
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
      const { token, user, sites } = response.data.data || response.data;
      
      if (token) {
        localStorage.setItem('jwt_token', token);
      }
      
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      }

      // Kullanıcının ilk sitesini aktif yap (varsa)
      if (sites && Array.isArray(sites) && sites.length > 0) {
        localStorage.setItem('active_site_id', sites[0].site_id);
      } else {
        // Site yoksa active_site_id'yi temizle
        localStorage.removeItem('active_site_id');
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

