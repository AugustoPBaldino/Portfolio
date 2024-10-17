import React from 'react';
import aboutImage from '../public/assets/imagem1.webp';
import curriculum from '../public/assets/arquivos/Currículo augusto.pdf';
import { useTranslation } from 'react-i18next';
import '../styles/About.css'

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about">
      <div className="background-about">
        <div className="img-wrapper">
          <img src={aboutImage} alt="About Image" />
        </div>
      </div>
      <div className="box-about">
        <div className="section-subtitle">
          <h2>
            <p>💻</p>
            <p>
              <span>{t('aboutSubtitle')}</span>
            </p>
          </h2>
        </div>
        <h3>
          {t('aboutDescription')}
        </h3>

        <h4>
          {t('aboutPersonalInfo')}
        </h4>

        <h4>
          {t('aboutCurriculumText')}
        </h4>

        <div className="button-cta">
          <a href={curriculum} download="Currículo augusto.pdf">
            <button>{t('aboutButtonText')}</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
