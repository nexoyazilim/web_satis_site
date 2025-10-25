import React, { useState } from 'react'
import { authApi } from '../api/auth'
import '/src/css/Login.css'

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Validasyon
    if (formData.password !== formData.confirmPassword) {
      setError('Şifreler eşleşmiyor')
      return
    }

    if (formData.password.length < 6) {
      setError('Şifre en az 6 karakter olmalıdır')
      return
    }

    setLoading(true)

    try {
      const result = await authApi.register(
        formData.email,
        formData.password,
        formData.fullName
      )
      console.log('Kayıt başarılı:', result)
      
      // Panel sayfasına yönlendir
      window.location.href = '/panel'
    } catch (err) {
      console.error('Kayıt hatası DETAY:', err)
      console.error('Error response:', err.response?.data)
      setError(err.message || err.response?.data?.message || 'Kayıt başarısız. Lütfen tekrar deneyin.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="login-decoration">
            <h2>Hoş Geldiniz</h2>
            <p>Hemen ücretsiz hesabınızı oluşturun ve demo sitelerimizi keşfedin</p>
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
              <h1>Hesap Oluştur</h1>
              <p>Bilgilerinizi girerek hızlıca kayıt olun</p>
            </div>

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Ad Soyad</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Ahmet Yılmaz"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta Adresi</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ornek@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Şifre</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  minLength="6"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Şifre Tekrar</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  minLength="6"
                />
              </div>

              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? 'Kayıt Yapılıyor...' : 'Kayıt Ol'}
              </button>
            </form>

            <div className="login-footer">
              <p>Zaten hesabınız var mı? <a href="/login">Giriş Yapın</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

