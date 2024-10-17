import React from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/Footer.css'

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="footer">
      <div className="container-footer">
        <h2>{t('footerMadeWith')} ❤️ {t('by')}</h2> 
        <h3>{t('footerCopyright')}</h3> 
      </div>
    </section>
  );
};

export default Footer;
