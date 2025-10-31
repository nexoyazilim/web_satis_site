import React, { useState } from 'react'
import { passwordChangeService } from '../api/passwordChange'
import '/src/css/Login.css'

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [passwordStrength, setPasswordStrength] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    // Şifre kontrolü
    if (newPassword !== confirmPassword) {
      setError('Yeni şifreler eşleşmiyor.')
      return
    }

    if (newPassword.length < 6) {
      setError('Yeni şifre en az 6 karakter olmalı.')
      return
    }

    if (currentPassword === newPassword) {
      setError('Yeni şifre mevcut şifre ile aynı olamaz.')
      return
    }

    setLoading(true)

    try {
      const result = await passwordChangeService.changePassword(currentPassword, newPassword)
      setSuccess(result.message || 'Şifreniz başarıyla değiştirildi.')
      
      // Formu temizle
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
      setPasswordStrength(null)
      
      // 3 saniye sonra panel'e yönlendir
      setTimeout(() => {
        window.location.href = '/panel'
      }, 3000)
    } catch (err) {
      setError(err.response?.data?.error || err.message || 'Şifre değiştirilemedi.')
      console.error('Şifre değiştirme hatası:', err)
    } finally {
      setLoading(false)
    }
  }

  const checkPasswordStrength = async (password) => {
    if (password.length < 3) {
      setPasswordStrength(null)
      return
    }

    try {
      const result = await passwordChangeService.checkPasswordStrength(password)
      setPasswordStrength(result.data)
    } catch (err) {
      console.error('Şifre güvenlik kontrolü hatası:', err)
    }
  }

  const handleNewPasswordChange = (e) => {
    const password = e.target.value
    setNewPassword(password)
    checkPasswordStrength(password)
  }

  const getStrengthColor = (score) => {
    if (score <= 2) return '#ff4757'
    if (score <= 3) return '#ffa502'
    if (score <= 4) return '#2ed573'
    return '#1e90ff'
  }

  const getStrengthText = (score) => {
    if (score <= 2) return 'Çok Zayıf'
    if (score <= 3) return 'Zayıf'
    if (score <= 4) return 'Orta'
    return 'Güçlü'
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="login-left-content">
            <div className="login-logo">
              <h1>WebSite Pro</h1>
              <p>Profesyonel Web Çözümleri</p>
            </div>
            
            <div className="login-features">
              <div className="feature-item">
                <div className="feature-icon">🔐</div>
                <div className="feature-text">
                  <h3>Güvenli Şifre</h3>
                  <p>En az 6 karakter uzunluğunda güçlü bir şifre seçin</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🛡️</div>
                <div className="feature-text">
                  <h3>Güvenlik Kontrolü</h3>
                  <p>Şifrenizin güvenlik seviyesini gerçek zamanlı kontrol edin</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">✅</div>
                <div className="feature-text">
                  <h3>Doğrulama</h3>
                  <p>Mevcut şifrenizi doğrulayarak güvenliği sağlayın</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="login-right">
          <div className="login-form-wrapper">
            <div className="login-header">
              <h1>Şifre Değiştir</h1>
              <p>Hesabınızın güvenliği için şifrenizi güncelleyin</p>
            </div>

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            {success && (
              <div className="success-message">
                {success}
                <p>3 saniye sonra panel'e yönlendirileceksiniz...</p>
              </div>
            )}

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="currentPassword">Mevcut Şifre</label>
                <input
                  type="password"
                  id="currentPassword"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="newPassword">Yeni Şifre</label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                  placeholder="••••••••"
                  required
                  disabled={loading}
                  minLength="6"
                />
                
                {/* Şifre Güvenlik Göstergesi */}
                {passwordStrength && (
                  <div className="password-strength">
                    <div className="strength-bar">
                      <div 
                        className="strength-fill"
                        style={{
                          width: `${(passwordStrength.score / 5) * 100}%`,
                          backgroundColor: getStrengthColor(passwordStrength.score)
                        }}
                      ></div>
                    </div>
                    <div className="strength-info">
                      <span 
                        className="strength-text"
                        style={{ color: getStrengthColor(passwordStrength.score) }}
                      >
                        {getStrengthText(passwordStrength.score)}
                      </span>
                      {passwordStrength.feedback && passwordStrength.feedback.length > 0 && (
                        <div className="strength-feedback">
                          {passwordStrength.feedback.map((feedback, index) => (
                            <div key={index} className="feedback-item">
                              • {feedback}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Yeni Şifre Tekrar</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  disabled={loading}
                  minLength="6"
                />
              </div>

              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? 'Şifre Değiştiriliyor...' : 'Şifreyi Değiştir'}
              </button>
            </form>

            <div className="login-footer">
              <p><a href="/panel">Panel'e Dön</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
