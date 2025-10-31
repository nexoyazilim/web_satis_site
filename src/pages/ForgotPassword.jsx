import React, { useState } from 'react'
import { passwordResetService } from '../api/passwordReset'
import '/src/css/Login.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      // Önce email kontrolü yap (enumerasyon korumalı)
      const emailCheckResult = await passwordResetService.checkEmail(email)
      console.log('🔵 Email Check Result:', emailCheckResult)

      // exists bilgisini sağlam/paranoid şekilde çöz
      const exists = (
        (emailCheckResult && emailCheckResult.data && typeof emailCheckResult.data.exists !== 'undefined')
          ? emailCheckResult.data.exists
          : (typeof emailCheckResult?.exists !== 'undefined' ? emailCheckResult.exists : null)
      )

      // exists === false ise açık mesaj göster ve işlemi durdur
      if (exists === false) {
        setError('Bu e-posta adresi sistemimizde kayıtlı değildir.')
        return
      }

      // exists === true ise şifre sıfırlama talebi gönder
      if (exists === true || emailCheckResult?.success === true) {
        const result = await passwordResetService.requestPasswordReset(email)
        setSuccess(result.message || 'Şifre sıfırlama linki gönderildi.')
        setEmail('')
        return
      }

      // exists bilgisi yoksa ama success alanı false/undefined ise genel güvenli mesaj göstermeyelim; kullanıcıya nötr bilgi verelim
      setError('İşlem gerçekleştirilemedi. Lütfen tekrar deneyin.')
    } catch (err) {
      // Email kontrolü hatası (geçersiz format vb.)
      if (err.response?.status === 400) {
        setError(err.response?.data?.error || 'Geçerli bir email adresi giriniz.')
      } else if (err.response?.status === 404) {
        // Backend kullanıcı yoksa 404 döndürüyor
        setError('Bu e-posta adresi sistemimizde kayıtlı değildir.')
      } else {
        // Diğer hatalar için genel hata göster
        setError('İşlem sırasında bir hata oluştu. Lütfen tekrar deneyin.')
      }
      console.error('Şifre sıfırlama hatası:', err)
    } finally {
      setLoading(false)
    }
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
                  <h3>Güvenli Şifre Sıfırlama</h3>
                  <p>E-posta adresinize güvenli bir link gönderilir</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <div className="feature-text">
                  <h3>Hızlı İşlem</h3>
                  <p>Birkaç dakika içinde şifrenizi sıfırlayabilirsiniz</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🛡️</div>
                <div className="feature-text">
                  <h3>Güvenli Sistem</h3>
                  <p>Token tabanlı güvenli şifre sıfırlama</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="login-right">
          <div className="login-form-wrapper">
            <div className="login-header">
              <h1>Şifremi Unuttum</h1>
              <p>E-posta adresinizi girin, size şifre sıfırlama linki gönderelim</p>
            </div>

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            {success && (
              <div className="success-message">
                {success}
              </div>
            )}

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">E-posta Adresi</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ornek@email.com"
                  required
                  disabled={loading}
                />
              </div>

              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? 'Gönderiliyor...' : 'Şifre Sıfırlama Linki Gönder'}
              </button>
            </form>

            <div className="login-footer">
              <p>Şifrenizi hatırladınız mı? <a href="/login">Giriş Yapın</a></p>
              <p>Hesabınız yok mu? <a href="/register">Kayıt Olun</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
