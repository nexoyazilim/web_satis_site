import apiClient from './client';

// Development: Vite proxy (/api) üzerinden; Production: gerçek URL
const API_BASE_URL = import.meta.env.DEV 
  ? '/api' 
  : (import.meta.env.VITE_API_URL || 'https://nexoyazilim-api.us-east-1.elasticbeanstalk.com');

const passwordChangeService = {
  // Şifre değiştir (JWT token gerekli)
  async changePassword(currentPassword, newPassword) {
    try {
      console.log('🔵 Password Change Request:', { 
        currentPassword: '***', 
        newPassword: '***' 
      });
      
      const response = await apiClient.post('/password-change/change', {
        currentPassword: currentPassword,
        newPassword: newPassword
      });
      
      console.log('✅ Password Change Success:', response.data);
      return response.data;
    } catch (error) {
      console.error('🔴 Şifre değiştirilemedi:', error);
      console.error('🔴 Error Response:', error.response?.data);
      throw error;
    }
  },

  // Şifre güvenlik kontrolü
  async checkPasswordStrength(password) {
    try {
      console.log('🔵 Password Strength Check:', { password: '***' });
      
      const response = await apiClient.post('/password-change/strength', {
        password: password
      });
      
      console.log('✅ Password Strength Check Success:', response.data);
      return response.data;
    } catch (error) {
      console.error('🔴 Şifre güvenlik kontrolü başarısız:', error);
      console.error('🔴 Error Response:', error.response?.data);
      throw error;
    }
  }
};

export { passwordChangeService };
