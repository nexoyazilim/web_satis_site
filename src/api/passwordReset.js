import apiClient from './client';

// Development: Vite proxy (/api) üzerinden; Production: gerçek URL
const API_BASE_URL = import.meta.env.DEV 
  ? '/api' 
  : (import.meta.env.VITE_API_URL || 'https://nexoyazilim-api.us-east-1.elasticbeanstalk.com');

const passwordResetService = {
  // Şifre sıfırlama talebi gönder
  async requestPasswordReset(email) {
    try {
      console.log('🔵 Password Reset Request:', { email });
      
      const response = await apiClient.post('/password-reset/request', {
        email: email
      });
      
      console.log('✅ Password Reset Request Success:', response.data);
      return response.data;
    } catch (error) {
      console.error('🔴 Şifre sıfırlama talebi gönderilemedi:', error);
      console.error('🔴 Error Response:', error.response?.data);
      throw error;
    }
  },

  // Token doğrulama
  async validateToken(token) {
    try {
      console.log('🔵 Token Validation:', { token });
      
      const response = await apiClient.get(`/password-reset/validate/${token}`);
      
      console.log('✅ Token Validation Success:', response.data);
      return response.data;
    } catch (error) {
      console.error('🔴 Token doğrulanamadı:', error);
      console.error('🔴 Error Response:', error.response?.data);
      throw error;
    }
  },

  // Şifre sıfırlama
  async resetPassword(token, newPassword) {
    try {
      console.log('🔵 Password Reset:', { token, newPassword: '***' });
      
      const response = await apiClient.post('/password-reset/reset', {
        token: token,
        newPassword: newPassword
      });
      
      console.log('✅ Password Reset Success:', response.data);
      return response.data;
    } catch (error) {
      console.error('🔴 Şifre sıfırlanamadı:', error);
      console.error('🔴 Error Response:', error.response?.data);
      throw error;
    }
  },

  // Süresi dolmuş token'ları temizle (admin)
  async cleanupExpiredTokens() {
    try {
      console.log('🔵 Token Cleanup');
      
      const response = await apiClient.post('/password-reset/cleanup');
      
      console.log('✅ Token Cleanup Success:', response.data);
      return response.data;
    } catch (error) {
      console.error('🔴 Token temizleme başarısız:', error);
      console.error('🔴 Error Response:', error.response?.data);
      throw error;
    }
  }
};

export { passwordResetService };
