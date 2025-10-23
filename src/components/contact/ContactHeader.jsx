import React from 'react'
import '../../css/contact/ContactHeader.css'

const ContactHeader = () => {
  return (
    <section className="contact-header section-lg">
      <div className="container">
        <div className="contact-header-content text-center">
          <h1 className="page-title">İletişim</h1>
          <p className="page-subtitle">
            Projeleriniz hakkında konuşmak için bizimle iletişime geçin. 
            Size en uygun çözümü birlikte bulalım.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactHeader
