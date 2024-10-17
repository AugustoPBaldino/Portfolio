import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import '../styles/Header.css'

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOn, setIsOn] = useState(i18n.language === 'en'); // Verifica se o idioma atual é inglês

  const toggleSwitch = () => {
    const newLang = isOn ? 'pt' : 'en'; // Troca o idioma baseado no estado do switch
    i18n.changeLanguage(newLang);
    setIsOn(!isOn); // Alterna o estado do switch
  };

  return (
    <header id="header">
      <a className="header-title" href="/">
        <h1>{t('title')}</h1> {/* Traduzir título */}
      </a>
      
      <nav className="navbar">
        <ul className="navbar-links">
          <li><a href="#person">{t('home')}</a></li> {/* Traduzir texto de link */}
          <li><a href="#about">{t('about')}</a></li>
          <li><a href="#projects">{t('projects')}</a></li>
          <li><a href="#contacts">{t('contacts')}</a></li>
          <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
          <motion.div className="handle" layout transition={spring} />
        </div>
        <p>{isOn ? 'English' : 'Português'}</p>
        </ul>

      </nav>
    </header>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

export default Header;
