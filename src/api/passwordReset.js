import apiClient from './client';

// Development: Vite proxy (/api) üzerinden; Production: gerçek URL
const API_BASE_URL = import.meta.env.DEV 
  ? '/api' 
  : (import.meta.env.VITE_API_URL || 'https://nexoyazilim-api.us-east-1.elasticbeanstalk.com');

const passwordResetService = {
  // Email kontrolü (enumerasyon korumalı)
  async checkEmail(email) {
    try {
      if (import.meta.env.DEV) console.log('🔵 Email Check (DEV):', { email });
      
      const response = await apiClient.post('/auth/email-check', {
        email: email
      });
      
      if (import.meta.env.DEV) console.log('✅ Email Check Success:', response.data);
      return response.data;
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('🔴 Email kontrolü başarısız:', error);
        console.error('🔴 Error Response:', error.response?.data);
      }
      throw error;
    }
  },

  // Şifre sıfırlama talebi gönder
  async requestPasswordReset(email) {
    try {
      if (import.meta.env.DEV) console.log('🔵 Password Reset Request (DEV):', { email });
      
      const response = await apiClient.post('/password-reset/request', {
        email: email
      });
      
      if (import.meta.env.DEV) console.log('✅ Password Reset Request Success:', response.data);
      return response.data;
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('🔴 Şifre sıfırlama talebi gönderilemedi:', error);
        console.error('🔴 Error Response:', error.response?.data);
      }
      throw error;
    }
  },

  // Token doğrulama
  async validateToken(token) {
    try {
      if (import.meta.env.DEV) console.log('🔵 Token Validation (DEV):', { token: '***' });
      
      const response = await apiClient.get(`/password-reset/validate/${token}`);
      
      if (import.meta.env.DEV) console.log('✅ Token Validation Success:', response.data);
      return response.data;
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('🔴 Token doğrulanamadı:', error);
        console.error('🔴 Error Response:', error.response?.data);
      }
      throw error;
    }
  },

  // Şifre sıfırlama
  async resetPassword(token, newPassword) {
    try {
      if (import.meta.env.DEV) console.log('🔵 Password Reset (DEV):', { token: '***', newPassword: '***' });
      
      const response = await apiClient.post('/password-reset/reset', {
        token: token,
        newPassword: newPassword
      });
      
      if (import.meta.env.DEV) console.log('✅ Password Reset Success:', response.data);
      return response.data;
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('🔴 Şifre sıfırlanamadı:', error);
        console.error('🔴 Error Response:', error.response?.data);
      }
      throw error;
    }
  },

  // Süresi dolmuş token'ları temizle (admin)
  async cleanupExpiredTokens() {
    try {
      if (import.meta.env.DEV) console.log('🔵 Token Cleanup (DEV)');
      
      const response = await apiClient.post('/password-reset/cleanup');
      
      if (import.meta.env.DEV) console.log('✅ Token Cleanup Success:', response.data);
      return response.data;
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('🔴 Token temizleme başarısız:', error);
        console.error('🔴 Error Response:', error.response?.data);
      }
      throw error;
    }
  }
};

export { passwordResetService };
