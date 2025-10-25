import axios from 'axios';

// Backend API Base URL
const API_BASE_URL = import.meta.env.VITE_API_URL;

// Axios client oluştur
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 saniye
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request Interceptor - Her istekte token ekle
apiClient.interceptors.request.use(
  (config) => {
    // LocalStorage'dan token al
    const token = localStorage.getItem('jwt_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Aktif site ID ekle (multi-tenant için)
    const siteId = localStorage.getItem('active_site_id');
    if (siteId) {
      config.headers['x-site-id'] = siteId;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor - Hata yönetimi
apiClient.interceptors.response.use(
  (response) => {
    // Başarılı response'u döndür
    return response;
  },
  (error) => {
    // 401 Unauthorized - Token geçersiz/expired
    if (error.response?.status === 401) {
      // Token'ı temizle ve login sayfasına yönlendir
      localStorage.removeItem('jwt_token');
      localStorage.removeItem('user');
      localStorage.removeItem('active_site_id');
      window.location.href = '/login';
    }

    // 403 Forbidden - Yetki yok
    if (error.response?.status === 403) {
      console.error('Bu işlem için yetkiniz yok');
    }

    // 429 Too Many Requests - Rate limit
    if (error.response?.status === 429) {
      console.error('Çok fazla istek. Lütfen bekleyin.');
    }

    return Promise.reject(error);
  }
);

export default apiClient;

