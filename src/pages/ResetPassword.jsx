import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { passwordResetService } from '../api/passwordReset'
import '/src/css/Login.css'

const ResetPassword = () => {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const navigate = useNavigate()
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [validating, setValidating] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    if (!token) {
      setError('Geçersiz token. Şifre sıfırlama linki eksik.')
      return
    }
    validateToken()
  }, [token])

  const validateToken = async () => {
    try {
      const result = await passwordResetService.validateToken(token)
      setUserInfo(result.data)
    } catch (err) {
      setError(err.response?.data?.error || 'Geçersiz veya süresi dolmuş token.')
      console.error('Token doğrulama hatası:', err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    // Şifre kontrolü
    if (newPassword !== confirmPassword) {
      setError('Şifreler eşleşmiyor.')
      return
    }

    if (newPassword.length < 6) {
      setError('Şifre en az 6 karakter olmalı.')
      return
    }

    setLoading(true)

    try {
      const result = await passwordResetService.resetPassword(token, newPassword)
      setSuccess(result.message || 'Şifreniz başarıyla sıfırlandı.')
      
      // 3 saniye sonra login sayfasına yönlendir
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    } catch (err) {
      setError(err.response?.data?.error || err.message || 'Şifre sıfırlanamadı.')
      console.error('Şifre sıfırlama hatası:', err)
    } finally {
      setLoading(false)
    }
  }

  if (error && !userInfo) {
    return (
      <div className="login-page">
        <div className="login-container">
          <div className="login-right">
            <div className="login-form-wrapper">
              <div className="login-header">
                <h1>Geçersiz Token</h1>
                <p>Bu şifre sıfırlama linki geçersiz veya süresi dolmuş</p>
              </div>
              
              <div className="error-message">
                {error}
              </div>

              <div className="login-footer">
                <p><a href="/forgot-password">Yeni şifre sıfırlama talebi gönder</a></p>
                <p><a href="/login">Giriş sayfasına dön</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
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
                <div className="feature-icon">✅</div>
                <div className="feature-text">
                  <h3>Token Doğrulandı</h3>
                  <p>Şifre sıfırlama token'ınız geçerli</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">👤</div>
                <div className="feature-text">
                  <h3>Kullanıcı: {userInfo?.fullName}</h3>
                  <p>E-posta: {userInfo?.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="login-right">
          <div className="login-form-wrapper">
            <div className="login-header">
              <h1>Yeni Şifre Belirle</h1>
              <p>Hesabınız için yeni bir şifre oluşturun</p>
            </div>

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            {success && (
              <div className="success-message">
                {success}
                <p>3 saniye sonra giriş sayfasına yönlendirileceksiniz...</p>
              </div>
            )}

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="newPassword">Yeni Şifre</label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  disabled={loading}
                  minLength="6"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Şifre Tekrar</label>
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
                {loading ? 'Şifre Sıfırlanıyor...' : 'Şifreyi Sıfırla'}
              </button>
            </form>

            <div className="login-footer">
              <p><a href="/login">Giriş sayfasına dön</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
