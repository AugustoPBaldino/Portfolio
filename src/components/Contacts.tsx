import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Contact.css'

const Contacts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contacts">
      <div className="contact-icon-content">
        <h2>{t('contactsTitle')} 📞</h2>
      </div>
      <div className="contact-icons-wrapper">
        <div className="contact-icon-content">
          <div className="contact-icon">
            <i className="fa-solid fa-map-location-dot"></i>
          </div>
          <div className="contact-info">
            <span>{t('location')}</span> 
            <p>{t('locationDetail')}</p> 
          </div>
        </div>

        <div className="contact-icon-content">
          <div className="contact-icon">
            <i className="fa-solid fa-envelope-open-text"></i>
          </div>
          <div className="contact-info">
            <span>{t('email')}</span> 
            <a href="mailto:augusto.baldino@edu.pucrs.br">augusto.baldino@edu.pucrs.br</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
