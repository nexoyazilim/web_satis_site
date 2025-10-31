import axios from 'axios';

// Backend API Base URL
// Development: Vite proxy '/api'
// Production: VITE_API_URL varsa onu kullan; yoksa default gerçek URL
const API_BASE_URL = import.meta.env.DEV
  ? '/api'
  : (import.meta.env.VITE_API_URL || 'https://nexoyazilim-api.us-east-1.elasticbeanstalk.com/api');

// Axios client oluştur
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 saniye
  // Content-Type'ı varsayılan olarak set etme; axios veri tipine göre belirler
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
    if (siteId && !config.headers['x-site-id']) {
      config.headers['x-site-id'] = siteId;
    }

    // FormData gönderimlerinde Content-Type başlığını kaldır (boundary'yi axios/tarayıcı ekler)
    try {
      if (typeof FormData !== 'undefined' && config.data instanceof FormData) {
        if (config.headers) {
          delete config.headers['Content-Type'];
          delete config.headers['content-type'];
        }
      }
    } catch (_) {
      // no-op
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
    // 400-499 hata gövdelerini yalnızca development'ta logla
    if (import.meta.env.DEV && error.response) {
      console.error('HTTP Error:', error.response.status, error.config?.url);
      try {
        console.error('Error body:', JSON.stringify(error.response.data));
      } catch (_) {
        console.error('Error body (raw):', error.response.data);
      }
    }

    // 401 Unauthorized - Token geçersiz/expired (sadece DEV)
    if (error.response?.status === 401 && import.meta.env.DEV) {
      console.error('🔴 401 HATASI (DEV):', JSON.stringify(error.response?.data, null, 2));
      console.error('🔴 REQUEST URL:', error.config?.url);
      console.error('🔴 REQUEST METHOD:', error.config?.method);
    }

    // 403 Forbidden - Yetki yok (sadece DEV)
    if (error.response?.status === 403 && import.meta.env.DEV) {
      console.error('Bu işlem için yetkiniz yok');
    }

    // 429 Too Many Requests - Rate limit (sadece DEV)
    if (error.response?.status === 429 && import.meta.env.DEV) {
      console.error('Çok fazla istek. Lütfen bekleyin.');
    }

    return Promise.reject(error);
  }
);

export default apiClient;

