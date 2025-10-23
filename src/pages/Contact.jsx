import React from 'react'
import ContactHeader from '../components/contact/ContactHeader'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import ContactMap from '../components/contact/ContactMap'

const Contact = () => {
  return (
    <div className="contact-page">
      <ContactHeader />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </div>
  )
}

export default Contact
