import React from 'react';
import { useTranslation } from 'react-i18next'; // Importando o hook para tradução
import profilePhoto from '../public/assets/foto-perfil-1.jpg';
import htmlIcon from '../public/assets/svg/html-5-svgrepo-com.svg';
import cssIcon from '../public/assets/svg/css-3-svgrepo-com.svg';
import javaIcon from '../public/assets/svg/java-icon.svg';
import springIcon from '../public/assets/svg/springio-icon.svg';
import javascriptIcon from '../public/assets/svg/icons8-javascript.svg';
import nodejsIcon from '../public/assets/svg/nodejs-icon.svg';
import githubIcon from '../public/assets/svg/icons8-github.svg'
import linkedinIcon from '../public/assets/svg/linkedin-icon.svg'

import '../styles/Person.css'

const Person: React.FC = () => {
  const { t } = useTranslation(); // Hook para tradução

  return (
    <section id="person">
      <div className="person-content">
        <div className="person-name">
          <h1>{t('personHello')}, <span></span></h1> {/* Tradução aplicada */}
          <h1>{t('personMyName')} <span></span></h1> {/* Tradução aplicada */}
          <h1>Augusto Baldino <span></span></h1>
        </div>
        <div className="stacks-content">
          <h3>{t('techs')}:</h3> {/* Tradução aplicada */}
          <div className="stacks">
            <ul>
              <li>
                <div>
                  <img src={htmlIcon} alt="html-icon" />
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div>
                  <img src={cssIcon} alt="css-icon" />
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div>
                  <img src={javaIcon} alt="java-icon" />
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div>
                  <img src={springIcon} alt="spring-icon" />
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div>
                  <img src={javascriptIcon} alt="javascript-icon" />
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div>
                  <img src={nodejsIcon} alt="nodejs-icon" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="person-background">
        <div className="wrapper-profile-photo">
          <img className="profile-photo" src={profilePhoto} alt="Foto_Augusto_Baldino" />
        </div>
        <div className="links">
          <a href="https://github.com/AugustoPBaldino" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Icone Github" />
          </a>
          <a href="https://www.linkedin.com/in/augusto-baldino-730ba1248/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Icone Linkedin" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Person;
