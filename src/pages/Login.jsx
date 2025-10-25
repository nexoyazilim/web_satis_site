import React, { useState } from 'react'
import { authApi } from '../api/auth'
import '/src/css/Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await authApi.login(email, password)
      console.log('Giriş başarılı:', result)
      
      // Panel sayfasına yönlendir
      window.location.href = '/panel'
    } catch (err) {
      setError(err.message || 'Giriş başarısız. Lütfen bilgilerinizi kontrol edin.')
      console.error('Giriş hatası:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="login-decoration">
            <h2>Admin Panel</h2>
            <p>Yönetim paneline hoş geldiniz</p>
            <div className="decoration-pattern">
              <div className="pattern-circle"></div>
              <div className="pattern-circle"></div>
              <div className="pattern-circle"></div>
            </div>
          </div>
        </div>
        
        <div className="login-right">
          <div className="login-form-wrapper">
            <div className="login-header">
              <h1>Giriş Yap</h1>
              <p>Admin paneline erişim için giriş yapın</p>
            </div>

            {error && (
              <div className="error-message">
                {error}
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
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Şifre</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>Beni Hatırla</span>
                </label>
                <a href="#" className="forgot-password">Şifremi Unuttum?</a>
              </div>

              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
              </button>
            </form>

            <div className="login-footer">
              <p>Hesabınız yok mu? <a href="/register">Kayıt Olun</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

