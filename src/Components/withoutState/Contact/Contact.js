import React from 'react';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import ContactInfo from '../ContactInfo/ContactInfo';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact-section" className="content flex-column-center">
      <ScrollToTopOnMount />
      <h2>Contact</h2>
      <ContactInfo id={'contact-info-container'} />
    </section>
  );
}
