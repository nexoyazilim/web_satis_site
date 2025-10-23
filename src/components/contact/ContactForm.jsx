import React, { useState } from 'react'
import '../../css/contact/ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form gönderme işlemi burada yapılacak
    console.log('Form submitted:', formData)
    alert('Mesajınız başarıyla gönderildi!')
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      company: '', 
      service: '', 
      message: '' 
    })
  }

  const services = [
    'Web Tasarımı',
    'Web Geliştirme', 
    'SEO Optimizasyonu',
    'E-ticaret',
    'Danışmanlık',
    'Diğer'
  ]

  return (
    <section className="contact-form section">
      <div className="container">
        <div className="form-container">
          <div className="form-header">
            <h2>Mesaj Gönderin</h2>
            <p>Projeniz hakkında detayları paylaşın, size en uygun çözümü sunalım.</p>
          </div>
          
          <form className="contact-form-content" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Ad Soyad *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Adınızı ve soyadınızı girin"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="E-posta adresinizi girin"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Telefon numaranızı girin"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Şirket</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Şirket adınızı girin"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="service">İlgilendiğiniz Hizmet</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Hizmet seçin</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Mesaj *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Projeniz hakkında detayları paylaşın"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Mesaj Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
