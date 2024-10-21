import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import '../styles/Header.css'

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOn, setIsOn] = useState(i18n.language === 'en'); 

  const toggleSwitch = () => {
    const newLang = isOn ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
    setIsOn(!isOn); 
  };

  return (
    <header id="header">
      <a className="header-title" href="/">
        <h1>{t('title')}</h1> 
      </a>
      
      <nav className="navbar">
        <ul className="navbar-links">
          <li><a href="#person">{t('home')}</a></li> 
          <li><a href="#about">{t('about')}</a></li>
          <li><a href="#projects">{t('projects')}</a></li>
          <li><a href="#contacts">{t('contacts')}</a></li>
         <li className="container"> <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
          <motion.div className="handle" layout transition={spring} />
        </div>
        <p>{isOn ? '🇺🇸' : '🇧🇷'}</p></li>
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
